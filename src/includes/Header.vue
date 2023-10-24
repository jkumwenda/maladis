<template>
    <div class="flex flex-row  p-4 bg-catalina-blue rounded-2xl">
        <div class="flex flex-row flex-1 justify-between space-x-2 items-center">
            <div class="flex flex-row items-center space-x-4">
                <Bars3CenterLeftIcon class="h-8 w-8 text-catalina-blue-50" />
                <span class="text-lg text-catskill-white-500">{{ headerTitle }}</span>
            </div>
            <div class="flex items-center space-x-4 justify-end">
                <div class="flex flex-row items-center">
                    <BellIcon class="w-6 h-6 text-catalina-blue-50"></BellIcon>
                </div>
                <div class="flex flex-row items-center">
                    <EnvelopeIcon class="w-6 h-6 text-catalina-blue-50"></EnvelopeIcon>
                </div>
                <div class="flex flex-row items-center space-x-2">
                    <UserCircleIcon class="w-8 h-8 text-catskill-white-400"></UserCircleIcon>
                    <span class="text-sm text-catskill-white-500">Simon Matchado</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bars3CenterLeftIcon, EnvelopeIcon, BellIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
export default {
    name: "HeaderView",
    components: {
        Bars3CenterLeftIcon, BellIcon, EnvelopeIcon, UserCircleIcon
    },
    props: {
        headerTitle: String,
    }
}
</script>