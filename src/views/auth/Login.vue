<template>
    <div
        class="flex items-center sm:w-4/12 w-12/12 p-4 sm:flex m-2 items-center bg-catskill-white-100 rounded-2xl shadow-md bg-catskill-white-100">
        <div class="flex flex-col p-6 flex-1 sm:space-y-4 space-y-4 border-2 border-athens-gray-500 rounded-2xl">
            <div class="flex flex-col space-y-1 items-center">
                <div class="">
                    <img class="w-24" src="@/assets/images/malawi.png" />
                </div>
                <div class="font-bold text-xl font-archivo">GovBankLink Pro</div>
                <div class="text-xl font-roboto-thin p-4">Sign in to your account</div>
            </div>
            <form class="flex-1 space-y-4" @submit.prevent="userLogin" method="POST">
                <label class="block">
                    <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Username
                    </span>
                    <input type="email" name="email" v-model="loginData.username"
                        class="mt-2 p-3 bg-white border shadow-sm border-athens-gray-500 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                        placeholder="Email" required />
                </label>
                <label class="block">
                    <span
                        class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Password
                    </span>
                    <input type="password" name="password" v-model="loginData.password"
                        class="mt-2 p-3 bg-white border shadow-sm border-athens-gray-500 placeholder-slate-400 focus:outline-none focus:border-athens-gray-500 focus:border-athens-gray-500 block w-full rounded-xl sm:text-sm focus:ring-1"
                        placeholder="Password" required />
                </label>
                <div class="flex space-between flex-row items-center">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div
                            class="w-11 h-6 bg-catskill-white-400 border-2 border-mid-gray-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-catalina-blue-200 dark:peer-focus:ring-catalina-blue-500 rounded-full peer dark:bg-athens-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-catskill-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-mid-gray-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-mid-gray-500 peer-checked:bg-catalina-blue-100">
                        </div>
                        <span class="ml-3 text-sm font-bold dark:text-gray-200">Remember me</span>
                    </label>
                    <span class="flex-1 text-right hover:text-catalina-blue-500 font-bold text-sm">Forgot
                        Password?</span>
                </div>
                <div class="flex flex-1 flex-row space-x-4 pb-4">
                    <button type="submit"
                        class="mt-2 flex-1 px-4 py-3 text-catskill-white-100 bg-gradient-to-r from-spray-600 to-spray-700 hover:bg-spray-700 rounded-xl">
                        Login
                    </button>
                </div>
            </form>
            <div
                class="flex flex-row sm:flex-nowrap flex-wrap sm:space-y-0 space-y-2 space-x-4 border-t border-t-athens-gray-500 pt-4">
                <img class="h-12" src="@/assets/images/rbm.png" />
                <img class="h-12" src="@/assets/images/nbm.png" />
                <img class="h-12" src="@/assets/images/std.png" />
                <img class="h-12" src="@/assets/images/ecobank.jpg" />
                <img class="h-12" src="@/assets/images/cetenary.png" />
                <img class="h-12" src="@/assets/images/fmb.png" />
                <img class="h-12" src="@/assets/images/fdh.png" />
            </div>
        </div>
    </div>
</template>

<script>
import router from "@/router";

export default {
    name: 'LoginView',
    data() {
        return {
            loginData: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        async userLogin() {
            this.isLoading = true;
            router.push("/dashboard");
        }
    }
}
</script>