Required GitHub Secrets:
- AZURE_WEBAPP_NAME_WEB
- AZURE_WEBAPP_PUBLISH_PROFILE_WEB
- AZURE_WEBAPP_NAME_API
- AZURE_WEBAPP_PUBLISH_PROFILE_API
- AZURE_RESOURCE_GROUP
- NEXT_PUBLIC_API_BASE_URL
- DATABASE_URL

Recommended Azure App Settings for web:
- SCM_DO_BUILD_DURING_DEPLOYMENT=false
- WEBSITE_NODE_DEFAULT_VERSION=~22
- PORT=3000
- NEXT_PUBLIC_API_BASE_URL=https://<your-api-app>.azurewebsites.net/api

Recommended Azure App Settings for api:
- SCM_DO_BUILD_DURING_DEPLOYMENT=false
- WEBSITE_NODE_DEFAULT_VERSION=~22
- PORT=4000
- DATABASE_URL=<postgres-connection-string>
- CORS_ORIGIN=https://<your-web-app>.azurewebsites.net
- STARTUP_COMMAND=node dist/main.js
