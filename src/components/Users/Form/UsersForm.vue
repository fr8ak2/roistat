<script setup>
import { ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { setModalStore } from '@/stores/modal.js'

const modalStore = setModalStore()

defineProps({
    users: {
        type: Array,
        required: true
    }
})

const emit = defineEmits(['add-user', 'close'])

const formData = ref({
    name: '',
    phone: '',
    parent: null
})

const addUser = () => {
    const newUser = {
        id: uuidv4(),
        name: formData.value.name,
        phone: formData.value.phone,
        parent: formData.value.parent,
        children: []
    }
    emit('add-user', newUser)
    resetForm()
    modalClose()
}

const resetForm = () => {
    formData.value.name = ''
    formData.value.phone = ''
    formData.value.parent = null
}

const modalClose = () => {
    modalStore.closeModal()
}
</script>

<template>
    <form class="form" @submit.prevent="addUser" autocomplete="off">
        <div class="form__group">
            <label for="name">Имя:</label>
            <input id="name" v-model="formData.name" type="text" required />
        </div>

        <div class="form__group">
            <label for="phone">Телефон:</label>
            <input id="phone" v-model="formData.phone" type="text" required />
        </div>

        <div class="form__group">
            <label for="parent">Добавить к пользователю:</label>
            <select id="parent" v-model="formData.parent">
                <option :value="null">Выберите пользователя</option>
                <option v-for="user in users" :key="user.id" :value="user.id">
                    {{ user.name }}
                </option>
            </select>
        </div>

        <div class="form__button">
            <button class="button --small" type="submit">Сохранить</button>
            <button type="button" @click="$emit('close')">Отменить</button>
        </div>
    </form>
</template>
