/*
 * @Author: caiwenkai
 * @Date: 2022-05-10 21:45:05
 * @LastEditors: caiwenkai
 * @LastEditTime: 2022-05-11 14:58:47
 * @Discription: 
 * @FilePath: \vue3-json-schema-form-study\schema-tests\test1.js
 */
const Ajv = require("ajv")
const localize = require("ajv-i18n")
const addFormats = require("ajv-formats")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)

// 自定义format 
ajv.addFormat('selfName', (data) => {
  console.log(data, '------------');
  return data === 'Kevin'
})

// 自定义关键字 —— 在传递数据是调用
// ! 旧版本
// ajv.addKeyword('testKeyword', {
//   /**
//    * 
//    * @param {*} schema 自定义关键字的value
//    * @param {*} data 当前关键字所在的key传入的值
//    * @returns 
//    */
//   validate(schema, data) {
//     console.log(schema, data, '自定义关键字');
//     if(schema === true) return true
//     else return schema.length === 6
//   }
// })
// ! 新版本
ajv.addKeyword({
  keyword: 'testKeyword',
  type: 'number',
  shcemaType: true,
  /** 
   * 
   * @param {*} schema 自定义关键字的value
   * @param {*} data 当前关键字所在的key传入的值
   * @returns 
   */
  validate(schema, data) {
    console.log(schema, data, '自定义关键字');
    if(schema === true) return true
    else return schema.length === 6
  }
})

// 自定义关键字 —— 在编译时调用
// ! 旧版本
// ajv.addKeyword('testCompileKeyword', {
//   compile(schema, parentSchema) {
//     console.log(schema, parentSchema, '自定义compile关键字');
//     return () => true
//   }
// })

// ! 新版本
ajv.addKeyword({
  keyword: 'testCompileKeyword',
  type: 'string',
  /**
   * 
   * @param {*} schema 自定义关键字的value
   * @param {*} parentSchema 当前关键字所在的key的配置信息
   * @returns 
   */
  compile(schema, parentSchema) {
    console.log(schema, parentSchema, '自定义compile关键字');
    return () => true
  },
  // 校验关键字传入的值
  metaSchema: {
    type: "boolean",
  },
  // 校验关键字所在key传入值的字符长度
  macro() {
    return {
      minLength: 3,
      maxLength: 10
    }
  }
})

const schema = {
  type: "object",
  properties: {
    foo: {
      type: "number",
      testKeyword: true
    },
    bar: {
      type: "string",
      testCompileKeyword: true
    },
    name: {
      type: "string",
      minLength: 5,
      format: 'selfName'
    },
    emails: {
      type: "string",
      // format只支持string 和 number
      format: "email"
    },
    pets: {
      type: 'array',
      // items: {
      //   type: 'string'
      // }
      items: [
        {
          type: 'string'
        },
        {
          type: 'number'
        }
      ],
      minItems: 2,
      additionalItems: false
    }
  },
  required: ["foo", "name"],
  // 是否有其他属性
  additionalProperties: false
}

const validate = ajv.compile(schema)

const data = {
  foo: 1,
  bar: "abc",
  name: "Kevin's Project",
  name: 'Kevin',
  emails: "Kevin@email.com",
  pets: ['dog', 123]
}

const valid = validate(data)
if (!valid) {
  localize.zh(validate.errors)
  console.log(validate.errors)
}