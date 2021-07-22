import app from './config/app'
import env from './config/env'

app.listen(env.APP_PORT, () => console.log(`⚡️ Server running at http://localhost:${env.APP_PORT}`))
