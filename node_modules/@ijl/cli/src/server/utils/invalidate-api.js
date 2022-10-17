const glob = require('glob').sync

module.exports = (location) => {
    glob(`${location}/**/*`, { absolute: true })
        .filter((module) => {
            try {
                return require.resolve(module)
            } catch (e) {
                return false
            }
        })
        .forEach((module) => {
            const resolvedModule = require.resolve(module)
            if (require.cache[resolvedModule]) {
                delete require.cache[resolvedModule]
            }
        })
}
