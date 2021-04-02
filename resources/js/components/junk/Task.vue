<template>
    <div class="container">
        <div>Name: {{ name }}</div>
        <div>Category: {{ category_id }}</div>
        <div>User: {{ user_id }}</div>
        <div>Order: {{ order }}</div>
        <div>Created: {{ created_at }}</div>
    </div>
</template>

<script>
export default {
    props: [
        'name',
        'category_id',
        'user_id',
        'order',
        'created_at',
        'updated_at'
    ],
}
</script>
