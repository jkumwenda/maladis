<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class="flex">
                <div class="sm:w-4/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">ESCOM</div>
                            <div class="text-sm flex">
                                <div class="font-bold  w-4/12">Address:</div>
                                <div>PO Box 23424, Lilongwe</div>
                            </div>
                            <div class="text-sm flex">
                                <div class="font-bold  w-4/12">Phone:</div>
                                <div>+265 170 993</div>
                            </div>
                            <div class="text-sm flex">
                                <div class="font-bold  w-4/12">Email:</div>
                                <div>info@escom.mw</div>
                            </div>
                            <div class="text-sm flex">
                                <div class="font-bold  w-4/12">Last updated:</div>
                                <div>26 Oct 2023: 6:10:65PM</div>
                            </div>
                        </div>
                        <div class="flex space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-seance-100 rounded-full">
                                <ArrowPathIcon class="w-5 h-5 text-seance-500"></ArrowPathIcon>
                            </div>
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <ChartBarSquareIcon class="w-5 h-5 text-catalina-blue-300"></ChartBarSquareIcon>
                            </div>
                            <div class="p-1 bg-spray-200 rounded-full">
                                <PencilSquareIcon class="w-5 h-5 text-catskill-white-800"></PencilSquareIcon>
                            </div>
                            <div class="p-1 bg-flamingo-100 rounded-full">
                                <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col space-y-4 flex-1 p-2">
                    <div class=" flex justify-between">
                        <button
                            class="px-4 py-2 text-catskill-white-100 bg-gradient-to-r from-spray-600 to-spray-700 hover:bg-spray-700 rounded-xl">
                            + Add
                            Account</button>
                    </div>
                    <div class="flex flex-col rounded-2xl space-y-4">
                        <div class="flex flex-col flex-1 flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                            <div class="flex flex-row space-x-4 items-center p-4">
                                <img class="w-10" src="@/assets/images/rbm.png" />
                                <div class="flex-1 font-bold text-normal text-catskill-white-800">Researve Bank of
                                    Malawi (Click to
                                    view)
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 flex-wrap rounded-2xl bg-catskill-white-400 shadow-sm">
                            <div class="flex flex-col flex-1 space-y-2 p-4">
                                <div class="flex flex-row items-center space-x-4">
                                    <img class="w-10" src="@/assets/images/nbm.png" />
                                    <div class="flex-1 font-bold text-normal text-catskill-white-800">National Bank (Click
                                        to
                                        close)
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="flex flex-row flex-1">
                                        <div class="font-bold w-2/12">Branch:</div>
                                        <div class="flex-1">Victoria Avenue</div>
                                    </div>
                                    <div class="flex flex-row flex-1">
                                        <div class="font-bold w-2/12">Name:</div>
                                        <div class="flex-1">ESCOM Operation</div>
                                    </div>
                                    <div class="flex flex-row flex-1">
                                        <div class="font-bold w-2/12">Number:</div>
                                        <div class="flex-1">1001234567</div>
                                    </div>
                                    <div class="flex flex-row flex-1">
                                        <div class="font-bold w-2/12">Type:</div>
                                        <div class="flex-1">Current</div>
                                    </div>
                                    <div class="flex flex-row flex-1">
                                        <div class="font-bold w-2/12">Status:</div>
                                        <div class="flex-1">Active</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                            <div class="flex flex-row space-x-4 items-center p-4">
                                <img class="w-10" src="@/assets/images/fdh.png" />
                                <div class="flex-1 font-bold text-normal text-catskill-white-800">First Discount House Bank
                                    (Click to
                                    view)
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col flex-1 flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                            <div class="flex flex-row space-x-4 items-center p-4">
                                <img class="w-10" src="@/assets/images/std.png" />
                                <div class="flex-1 font-bold text-normal text-catskill-white-800">Standard Bank of Malawi
                                    (Click to
                                    view)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { PencilSquareIcon, TrashIcon, ChartBarSquareIcon, ArrowPathIcon } from '@heroicons/vue/24/solid'

export default {
    name: 'MDAView',
    components: {
        PencilSquareIcon, TrashIcon, HeaderView, ChartBarSquareIcon, ArrowPathIcon
    },
    data() {
        return {
            headerTitle: "Electricity Supply Commission of Malawi",
        }
    }
}
</script>