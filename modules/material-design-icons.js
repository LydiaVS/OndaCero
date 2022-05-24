import { resolve } from 'path'

const icons = ['Magnify','Home']

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}