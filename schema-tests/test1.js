const Ajv = require("ajv")
const addFormats = require("ajv-formats")
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
addFormats(ajv)
ajv.addFormat('selfName', (data) => {
  console.log(data, '------------');
  return data === 'Kevin'
})

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"},
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
  // name: "Kevin's Project",
  name: "Kevin",
  emails: "Kevin@email.com",
  pets: ['dog', 123]
}

const valid = validate(data)
if (!valid) console.log(validate.errors)