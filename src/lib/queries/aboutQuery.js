export function query(locale) {
    let query = {
        query: `{
            aboutPage(locale: "${locale}"){
                data {
                    attributes {
                        heroHeading
                        heroSubtext
                        heroBgImage {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                }
                            }
                        }
                        stepsHeading
                        step {
                            heading
                            text
                        }
                        servicesHeading
                        servicesSubtext
                        clientsHeading
                        }
                    }
                }
            services(locale:"${locale}"){
                data {
                    id
                    attributes {
                        title
                        text
                    }
                }
            }
            clients{
                data {
                    attributes {
                        clientLogo {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                }
                            }
                        }
                    }
                }
            }
        }`
    }

    return query
}