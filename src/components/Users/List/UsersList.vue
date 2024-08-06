<script setup>
import { computed, toRefs } from 'vue'
import UsersItem from '@/components/Users/Item/UsersItem.vue'

const props = defineProps({
    users: {
        type: Array,
        required: true
    }
})

const { users } = toRefs(props)

const getAllUsers = (parentId = null) => {
    const filterUsers = users.value.filter((user) => user.parent === parentId)
    return filterUsers.map((user) => ({ ...user, children: getAllUsers(user.id) }))
}

const getUsers = computed(() => getAllUsers())
</script>

<template>
    <div class="users__content">
        <div v-if="!users.length" class="users__empty">
            Список пользователей отствует. Пожалуйста, добавьте пользователя.
        </div>

        <div v-else class="users__list">
            <div class="users__title">
                <span class="name">Имя</span>
                <span class="phone">Телефон</span>
            </div>

            <UsersItem v-for="user in getUsers" :key="user.id" :user="user" />
        </div>
    </div>
</template>
