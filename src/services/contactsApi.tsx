import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Contact } from '../models/contact.model';

export const contactsApi = createApi({
    reducerPath: "contactsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
    endpoints: (builder) => ({
        contacts: builder.query<Contact[], void>({
            query: () => '/people'
        }),
        contact: builder.query<Contact, any>({
            query: (id) => `/people/${id}`
        })

    })
})

export const { useContactsQuery, useContactQuery } = contactsApi;