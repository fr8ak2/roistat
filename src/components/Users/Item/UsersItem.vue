<script setup>
import { toRefs } from 'vue'

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})

const { user } = toRefs(props)
</script>

<template>
    <div class="users__item">
        <div class="users__details">
            <span v-if="user?.name">{{ user.name }}</span>
            <span v-if="user?.phone">{{ user.phone }}</span>
        </div>
        <div v-if="user?.children.length" class="users__children">
            <UsersItem v-for="child in user.children" :key="child.id" :user="child" />
        </div>
    </div>
</template>
