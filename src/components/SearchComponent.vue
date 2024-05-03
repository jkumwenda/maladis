<template>
    <div class="sm:w-4/12 w-12/12 flex flex-row space-x-2">
        <input
            class="mt-2 px-4 p-2 bg-white border shadow-sm border-athens-gray-500 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-xl sm:text-sm focus:ring-1"
            placeholder="Search..." />
        <button
            class="mt-2 px-4 py-2 text-catskill-white-100 bg-gradient-to-r from-spray-600 to-spray-700 hover:bg-spray-700 rounded-xl">
            Search</button>
    </div>
</template>

<script>
export default {
    name: 'SearchComponent'
}
</script>
