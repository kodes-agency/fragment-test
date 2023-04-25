export function query(locale) {
    let query = {
        query: `{
            homePage(locale:"${locale}") {
                    data {
                    attributes {
                        heroHeading
                        heroSubtext
                        workHeading
                        featuredProjects {
                            data {
                                attributes {
                                    title
                                    client {
                                        data {
                                            attributes {
                                                clientName
                                            }
                                        }
                                    }
                                    category {
                                        data {
                                            attributes {
                                                category
                                            }
                                        }
                                    }
                                    thumbnail {
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
                        servicesSubtext
                        servicesImage1 {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                }
                            }
                        }
                        servicesImage2 {
                            data {
                                attributes {
                                    url
                                    alternativeText
                                }
                            }
                        }
                        blogHeading
                        blogSubtext
                        featuredBlogs {
                            data {
                                id
                                attributes {
                                    title
                                    publishedAt
                                    thumbnail {
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
                        contactHeadingBold1
                        contactHeadingBold2
                        contactHeadingItalicBold
                        contactSubtext
                        contactFormSubtext
                    }
                }
            }
        }`
    }

    return query
}