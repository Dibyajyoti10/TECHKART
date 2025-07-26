import { connect } from "http2";
import { Inngest } from "inngest";
import connectDataBase from "./db";
import User from "@/app/models/User";

export const inngest = new Inngest({
  id: "teckart"
});

export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    {
        event: 'clerk/user.created'
    },
    async ({event}) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data;

        const userData = {
            _id: id,
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }

        await connectDataBase()
        await User.create(userData)
    }
)


export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    {
        event: 'clerk/user.updated'
    },
    async ({event}) => {
        const {
            id,
            first_name,
            last_name,
            email_addresses,
            image_url
        } = event.data;

        const userData = {
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            imageUrl: image_url
        }

        await connectDataBase()
        await User.findByIdAndUpdate(id, userData, { new: true })
    }
)


export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-from-clerk'
    },
    {
        event: 'clerk/user.deleted'
    },
    async ({event}) => {
        const { id } = event.data;

        await connectDataBase()
        await User.findByIdAndDelete(id)
    }
)