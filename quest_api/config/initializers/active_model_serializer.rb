# format api response in JSON
ActiveModelSerializers.config.adapter = :json_api

# change default nested associations level
ActiveModelSerializers.config.default_includes = '**'

api_mime_types = %W(
  application/vnd.api+json
  text/x-json
  application/json
)

Mime::Type.register 'application/vnd.api+json', :json, api_mime_types
