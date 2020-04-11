{
	"configurationSettings": [{
		"category": "<b>General</b>",
		"fields": [{
				"type": "webscene",
				"label": "Select a scene"
			},
			{
				"type": "appproxies"
			}, {
				"type": "string",
				"fieldName": "title",
				"label": "Title",
				"tooltip": "Title",
				"placeHolder": "Title"
			}, {
				"type": "string",
				"fieldName": "subtitle",
				"label": "Subtitle",
				"tooltip": "Subtitle",
				"placeHolder": "Subtitle"
			}
		]
	}, {
		"category": "<b>Theme</b>",
		"fields": [{
			"type": "color",
			"fieldName": "color",
			"label": "Color",
			"tooltip": "Color",
			"sharedThemeProperty": "header.background"
		}, {
			"type": "boolean",
			"fieldName": "reverse",
			"label": "Dark theme for map",
			"tooltip": "Dark theme for map"
		}]
	}, {
		"category": "<b>Options</b>",
		"fields": [{
			"type": "boolean",
			"fieldName": "showLayers",
			"label": "Enable a Layer List",
			"tooltip": "Enable a Layer List"
		}]
	}],
	"values": {
		"title": "",
		"subtitle": "",
		"color": "#80ab00",
		"reverse": true,
		"showLayers": true,
		"showBasemaps": false
	}
}
