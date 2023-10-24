<template>
    <div class="space-y-4">
        <ul class="space-y-1">
            <router-link :to="{ name: 'Dashboard' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'Dashboard' }"
                class="flex flex-row space-x-2 p-2 px-4  border-l-2 border-l-catalina-blue-50">
                <HomeIcon class="h-6 w-6" /><span>Home</span>
            </router-link>
        </ul>
        <div class="pt-4 pl-4 uppercase font-bold text-xs">Manage Registration</div>
        <ul class="space-y-1">
            <router-link :to="{ name: 'PracticingLicenses' }"
                :class="{ 'flex flex-row space-x-2 p-2 px-4 text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'PracticingLicenses' }"
                class="flex flex-row space-x-2 p-2 px-4  border-l-2 border-l-catalina-blue-50">
                <UsersIcon class="h-6 w-6" /><span>Practicing License</span>
            </router-link>
            <router-link :to="{ name: 'ProductLicenses' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'ProductLicenses' }"
                class="flex flex-row space-x-2 p-2 px-4 border-l-2 border-l-catalina-blue-50 hover:border-l-catalina-blue-50">
                <BeakerIcon class="h-6 w-6" /><span>Products</span>
            </router-link>
            <router-link :to="{ name: 'Businesses' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'Businesses' }"
                class="flex flex-row space-x-2 p-2 px-4 border-l-2 border-l-catalina-blue-50">
                <BuildingStorefrontIcon class="h-6 w-6" /><span>Businesses</span>
            </router-link>
            <router-link :to="{ name: 'YourRegistration' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'YourRegistration' }"
                class="flex flex-row space-x-2 p-2 px-4 border-l-2 border-l-catalina-blue-50">
                <UserIcon class="h-6 w-6" /><span>Your Registration</span>
            </router-link>
        </ul>
        <div class="pt-4 pl-4 uppercase font-black text-xs">System Management</div>
        <ul class="space-y-1">
            <router-link :to="{ name: 'Users' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'Users' }"
                class="flex flex-row space-x-2 p-2 px-4 border-l-2 border-l-catalina-blue-50">
                <UserGroupIcon class="h-6 w-6" /><span>Users</span>
            </router-link>
            <router-link :to="{ name: 'Configurations' }"
                :class="{ 'text-catalina-blue-50 border-l-2 border-l-catalina-blue-50': $route.name === 'Configurations' }"
                class="flex flex-row space-x-2 p-2 px-4 border-l-2 border-l-catalina-blue-50">
                <Cog8ToothIcon class="h-6 w-6" /><span>Configuration</span>
            </router-link>
        </ul>
        <div
            class="flex flex-row space-x-2 rounded-2xl bg-catalina-blue-500 text-catskill-white-100 items-center m-4 p-4 py-4">
            <LifebuoyIcon class="w-10 h-10"></LifebuoyIcon>
            <span class="font-roboto-thin text-xl">Help</span>
        </div>
    </div>
</template>

<script>
import { HomeIcon, UserGroupIcon, UserIcon, Cog8ToothIcon, UsersIcon, BeakerIcon, BuildingStorefrontIcon, LifebuoyIcon } from '@heroicons/vue/24/solid'
export default {
    name: 'SidebarView',
    components: {
        HomeIcon, UsersIcon, UserIcon, UserGroupIcon, Cog8ToothIcon, BeakerIcon, BuildingStorefrontIcon, LifebuoyIcon
    }
}
</script>