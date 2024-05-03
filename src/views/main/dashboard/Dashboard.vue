<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class="flex flex-row space-x-4">
                <div class="flex flex-col space-y-4 bg-catskill-white-50 p-4 sm:w-6/12 rounded-2xl shadow-sm flex-1">
                    <span class="text-md font-bold">Your quick stats</span>
                    <div class="flex flex-row flex-wrap">
                        <div class="w-1/2">
                            <div class="flex flex-row bg-athens-gray-400 m-2 p-4 py-6 rounded-xl space-x-4 items-center">
                                <div class="p-2 rounded-full bg-dodger-blue-50">
                                    <PresentationChartLineIcon class="w-6 h-6 text-catalina-blue-500">
                                    </PresentationChartLineIcon>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-md font-bold">154</span>
                                    <span class="text-sm font-roboto-thin font-bold text-mid-gray-300">New
                                        accounts</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex flex-row bg-athens-gray-400 m-2 p-4 py-6 rounded-xl space-x-4 items-center">
                                <div class="p-2 rounded-full bg-seance-100">
                                    <ArrowPathIcon class="w-6 h-6 text-seance-500">
                                    </ArrowPathIcon>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-md font-bold">17</span>
                                    <span class="text-sm font-roboto-thin font-bold text-mid-gray-300">Pending
                                        sync</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex flex-row bg-athens-gray-400 m-2 p-4 py-6 rounded-xl space-x-4 items-center">
                                <div class="p-2 rounded-full bg-buttercup-50">
                                    <HandThumbUpIcon class="w-6 h-6 text-buttercup-500">
                                    </HandThumbUpIcon>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-md font-bold">870</span>
                                    <span class="text-sm font-roboto-thin font-bold text-mid-gray-300">Active</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-1/2">
                            <div class="flex flex-row bg-athens-gray-400 m-2 p-4 py-6 rounded-xl space-x-4 items-center">
                                <div class="p-2 rounded-full bg-spray-200">
                                    <BanknotesIcon class="w-6 h-6 text-spray-700">
                                    </BanknotesIcon>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-md font-bold">MWK 287 Trillion</span>
                                    <span class="text-sm font-roboto-thin font-bold text-mid-gray-300">Total Revenue</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fflex flex-col space-y-4 bg-catskill-white-50 p-4 sm:w-6/12 rounded-2xl shadow-sm flex-1">
                    <span class="text-md font-bold">Account activity status</span>
                    <img class="w-450" src="@/assets/images/graph.png" />
                </div>
            </div>
            <div class="flex flex-row space-x-4">
                <div
                    class="flex flex-col flex-1 p-4 bg-spray-700 rounded-2xl text-catskill-white-100 text-center items-center justify-center">
                    <h1 class="text-lg font-bold">Manage MDAs Bank Accounts</h1>
                    <p class="font-roboto-thin">- Check the account status -</p>
                    <p class="font-roboto-thin">- Add new MDAs -</p>
                    <p class="font-roboto-thin">- Add new account -</p>
                </div>
                <div class="flex-1 space-y-4 bg-catskill-white-50 p-4 sm:w-6/12 rounded-2xl shadow-sm flex-1">
                    <span class="text-md font-bold">Revenue geration status</span>
                    <div class="flex flex-1 items-center justify-center">
                        <img src="@/assets/images/license.png" />
                    </div>
                </div>
                <div class="flex-1 space-y-4 bg-catskill-white-50 p-4 sm:w-6/12 rounded-2xl shadow-sm flex-1">
                    <span class="text-md font-bold">Revenue evolution</span>
                    <div class="flex flex-1 items-center justify-center">
                        <img class="w-60" src="@/assets/images/fee.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { PresentationChartLineIcon, HandThumbUpIcon, BanknotesIcon, ArrowPathIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'DashboardView',
    components: {
        PresentationChartLineIcon, HandThumbUpIcon, BanknotesIcon, HeaderView, ArrowPathIcon
    },
    data() {
        return {
            headerTitle: "Dashboard",
        }
    }
}
</script>