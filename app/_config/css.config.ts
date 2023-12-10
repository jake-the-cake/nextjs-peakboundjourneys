const colors: CssColorConfig = {
	primary: '',
	secondary: 'green-600',
	light: 'zinc-100',
	dark: 'gray-400',
	accent: ''
}

function addObjectValuePrefix(prefix: string, data: StringIndexToString | string, dash: string = '-'): StringIndexToString | string {
	if (typeof data === 'string') return prefix + dash + data
	else {
		Object.entries(data).forEach(([k, v]) => {
			data[k] = prefix + dash + v
		})
		return data
	}
}

const css = {
	bg: addObjectValuePrefix('bg', colors) as CssColorConfig
}

export default css