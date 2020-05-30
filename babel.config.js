module.exports = function (api) {
	api.cache(true)
	return {
		excludes: ["*.json"],
	}
}
