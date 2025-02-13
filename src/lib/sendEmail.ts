import emailjs from '@emailjs/browser'

const sendEmail = async (message: string) => {

    try{

        const templateParams = {
            message: message,
          }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_APIKEY!
      )
    } catch (error) {
        throw new Error('Failed to send feedback')
    }
}

export default sendEmail
