<template>
    <div class="flex flex-col text-md flex-grow space-y-4 pb-32 text-catskill-white-100">
        <ul class=" space-y-1">
            <router-link :to="{ name: 'Dashboard' }" :class="{ 'text-spray-200': $route.name === 'Dashboard' }"
                class="flex flex-row space-x-2 p-2 px-4  ">
                <HomeIcon class="h-6 w-6" /><span>Dashboard</span>
            </router-link>
            <router-link :to="{ name: 'MDAs' }" :class="{ 'text-spray-200': $route.name === 'MDAs' }"
                class="flex flex-row space-x-2 p-2 px-4 ">
                <BuildingStorefrontIcon class="h-6 w-6" /><span>MDAs</span>
            </router-link>
        </ul>
        <div class="pt-4 pl-4 uppercase font-black text-sm border-b p-2 mr-4">System Management</div>
        <ul class="space-y-1">
            <router-link :to="{ name: 'Users' }" :class="{ 'text-spray-200': $route.name === 'Users' }"
                class="flex flex-row space-x-2 p-2 px-4 ">
                <UserGroupIcon class="h-6 w-6" /><span>Users</span>
            </router-link>
            <router-link :to="{ name: 'Configurations' }" :class="{ 'text-spray-200': $route.name === 'Configurations' }"
                class="flex flex-row space-x-2 p-2 px-4 ">
                <Cog8ToothIcon class="h-6 w-6" /><span>Configuration</span>
            </router-link>
        </ul>
        <div class="flex-grow"></div>
        <div class="flex flex-row space-x-2 rounded-2xl bg-flamingo-600 text-catskill-white-100 items-center m-4 p-3">
            <LifebuoyIcon class="w-8 h-8"></LifebuoyIcon>
            <span class="font-roboto-thin text-xl">Help</span>
        </div>
    </div>
</template>

<script>
import { HomeIcon, UserGroupIcon, Cog8ToothIcon, BuildingStorefrontIcon, LifebuoyIcon } from '@heroicons/vue/24/solid'
export default {
    name: 'SidebarView',
    components: {
        HomeIcon, UserGroupIcon, Cog8ToothIcon, BuildingStorefrontIcon, LifebuoyIcon
    }
}
</script>