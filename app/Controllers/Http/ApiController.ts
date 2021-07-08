// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiController {
    public testApi() {
        return {
            "success": true,
            "message": "hey there!",
            "data": null
        }
    }
}
