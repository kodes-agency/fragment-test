import { query } from '$lib/queries/aboutQuery'

export const load = async ({fetch, locals}) => {
  let uri = locals.apiUri
  const fetchOptions = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(query(locals.locale))
  }

  const response = await fetch(uri,fetchOptions)

  if(response.status === 404) {
    throw new Error('Page not found');
  } else if (response.status === 500){
    throw new Error('Server error');
  } else if (!response.ok){
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  
  const json = await response.json()
  return {
    imgUrl: locals.imgUrl,
    locale: locals.locale,
    gradient: locals.gradient,
    data: {
      about: json?.data?.aboutPage.data.attributes,
      services: json?.data?.services.data,
      clients: json?.data?.clients.data
    }
  }
  
}