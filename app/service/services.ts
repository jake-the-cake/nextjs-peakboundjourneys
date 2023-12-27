type CategoryInfo = {}

type ServiceProps = {
  categories: string[],
} & { [key: string]: CategoryInfo }

const services: ServiceProps = {
  categories: [
    'hauling',
    'installation',
    'seasonal',
    'odd jobs'
  ]
}

const regExp = {
  hasDash: new RegExp('[-]', 'g'),
  onlyAlphaNumDashSpace: new RegExp('[A-Za-z0-9-]', 'g')
}

getRedundantCategoryInfo(services)

function getRedundantCategoryInfo(obj: ServiceProps) {
  obj.categories.forEach((cat, catIndex) => {
    // if (cat.match(regExp.hasDash)?.length) cat = makeCamelCase(cat)
    obj[makeCamelCase(cat)] = {
      url: '/' + makeUrlSlug(cat),
      label: makeTitle(cat),
      propName: makeCamelCase(cat)
    }
  })
  console.log(obj)
}

function makeTitle(value: string): string {
  if (!value.match(regExp.onlyAlphaNumDashSpace)?.length) return 'Syntax Error'
  const splitValueBySpace: (string | string[])[] = value.split(' ')
  splitValueBySpace.forEach((val, idx) => {
    if ((val as string).match(regExp.hasDash)?.length) {
      splitValueBySpace[idx] = (val as string).split('-') as string[]
      (splitValueBySpace[idx] as string[]).forEach((v, i) => {
        if (v !== '') (splitValueBySpace[idx] as string[])[i] = v[0].toUpperCase() + v.slice(1).toLowerCase()
      })
    }
    else splitValueBySpace[idx] = val[0].toUpperCase() + (val as string).slice(1).toLowerCase()
  })
  return splitValueBySpace.flat(1).join(' ')
}

function makeUrlSlug(value: string): string {
  return value.replace(' ', '-').toLowerCase()
}

function makeCamelCase(value: string): string {
  if (!value.match(regExp.onlyAlphaNumDashSpace)?.length) return 'syntaxError'
  const splitValueBySpace: (string | string[])[] = value.split(' ')
  splitValueBySpace.forEach((val, idx) => {
    if ((val as string).match(regExp.hasDash)?.length) {
      splitValueBySpace[idx] = (val as string).split('-') as string[]
      (splitValueBySpace[idx] as string[]).forEach((v, i) => {
        if ((idx !== 0 || i !== 0) && v !== '') (splitValueBySpace[idx] as string[])[i] = v[0].toUpperCase() + v.slice(1).toLowerCase()
      })
    }
    else if (idx !== 0) splitValueBySpace[idx] = val[0].toUpperCase() + (val as string).slice(1).toLowerCase()
    else splitValueBySpace[idx] = (val as string).toLowerCase()
  })
  return splitValueBySpace.flat(1).join('')
}

export default services