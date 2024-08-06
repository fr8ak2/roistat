<script setup>
import { onMounted, ref } from 'vue'
import { setModalStore } from '@/stores/modal'
import UsersList from '@/components/Users/List/UsersList.vue'
import UsersForm from '@/components/Users/Form/UsersForm.vue'

const modalStore = setModalStore()
const users = ref([])

onMounted(() => {
    const data = localStorage.getItem('users')

    if (data) {
        users.value = JSON.parse(data)
    }
})

const handleUsers = (user) => {
    users.value.push(user)
    localStorage.setItem('users', JSON.stringify(users.value))
}

const showModal = () => {
    modalStore.showModal()
}

const closeModal = () => {
    modalStore.closeModal()
}
</script>

<template>
    <section class="users">
        <div class="wrapper">
            <div class="users__inner">
                <div class="users__heading">
                    <h1>Пользователи</h1>
                    <button class="button" @click="showModal">Добавить пользователя</button>
                </div>

                <UsersList :users="users" />
            </div>
        </div>

        <AppModal>
            <UsersForm :users="users" @add-user="handleUsers" @close="closeModal" />
        </AppModal>
    </section>
</template>
