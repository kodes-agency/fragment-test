const localUri = "http://localhost:3000"
const publicUri = "http://45.91.94.21/graphql"
const imageUrl = "http://45.91.94.21"
const gradient = 'http://45.91.94.21/uploads/Fragment_Gradient_1200x1200_saturated_861feb5604.jpg'
const localeBg = "bg"
const localeEn = "en"

export async function handle({ event, resolve }) {
    event.locals.apiUri = publicUri
    event.locals.locale = localeEn
    event.locals.imgUrl = imageUrl
    event.locals.gradient = gradient

    return await resolve(event)
}