interface IErrors {
  syntax: {
    noEmptyValue: () => string
    wrongType: (expected: string, received: string) => string
  }
}

type StringI_StringO = (value: string) => string

const errors: IErrors = {
  syntax: {
    noEmptyValue: () => 'Value cannot be empty.',
    wrongType: (expected, received) => `Expected ${QString.aAn(expected)} but got ${QString.aAn(received)}.`
  }
}

const QRegExp = {
  isVowel: new RegExp('[aeiou]'),
  allowOnly: (value: string) => new RegExp('[' + value + ']', 'g')
}

function checkIsValidString(value: string) {
  if (value === '') throw new SyntaxError(errors.syntax.noEmptyValue())
  if (typeof value !== 'string') throw new SyntaxError(errors.syntax.wrongType('string', typeof value))
}

class QString extends String {
  slug: string | undefined
  title: string | undefined
  camel: string | undefined

  constructor(value: string) {
    super(value)
    /* force number to a string */
    if (typeof value === 'number') value = String(value)
    /* reject non-strings and empty strings */
    checkIsValidString(value)

    this.slug = this.createSlug(value)
    this.title = this.createTitle(value)
  }

  capitalizeFirst(value: string) {
    return value[0].toUpperCase() + value.slice(1)
  }

  captalizeOnlyFirst(value: string) {
    return value[0].toUpperCase() + value.slice(1).toLowerCase()
  }

  createSlug(value: string): string {
    const splitValue = value.split(' ')
    splitValue.forEach((val, index) => {
      splitValue[index] = this.parseOnly(val, '').toLowerCase()
    })
    return splitValue.filter(val => val !== '').join('-')
  }

  createTitle(value: string): string {
    const splitValue = value.split(' ')
    splitValue.forEach((val: string, i: number) => {
      splitValue[i] = this.captalizeOnlyFirst(val)
    })
    return splitValue.join(' ')
  }

  parseOnly(value: string, allow: string, alphaNum: boolean = true) {
    if (alphaNum === true) allow = 'A-Za-z0-9' + allow
    const splitValue = value.split('')
    splitValue.forEach((char: string, index: number) => {
      if (!QRegExp.allowOnly(allow).test(char)) splitValue[index] = ''
    })
    return splitValue.join('')
  }

  splitEditCombine(value: string, char: string, ...callbacks: StringI_StringO[]) {
    checkIsValidString(value)
    checkIsValidString(char)
    if (callbacks.length === 0) return value
    const splitValue = value.split(char)
    if (splitValue.length <= 1) return value
    splitValue.forEach((val, index) => {
      callbacks.forEach((callback) => {
        splitValue[index] = callback(val)
      })
    })
    return splitValue.join(char)
  }

  static aAn(nextWord: string, isFirst: boolean = false): string {
    /* force number to a string */
    if (typeof nextWord === 'number') nextWord = String(nextWord)
    /* reject non-strings and empty strings */
    checkIsValidString(nextWord)
    /* set initial value */
    let value = 'a'
    /* capitalize if starting a sentence */
    if (isFirst === true) value = value.toUpperCase()
    /* if next word starts in a vowel, and an 'n' */
    if (QRegExp.isVowel.test(nextWord[0].toLowerCase())) value += 'n'
    /* return string value */
    return `${value} ${nextWord}`
  }
}


export {
  errors,
  QString
}