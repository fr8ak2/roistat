import { reactive } from 'vue'

const state = reactive({ isOpen: false })

export const setModalStore = () => {
    const showModal = () => {
        state.isOpen = true
    }

    const closeModal = () => {
        state.isOpen = false
    }

    return {
        state,
        showModal,
        closeModal
    }
}
