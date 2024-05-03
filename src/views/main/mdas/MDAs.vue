<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class=" flex justify-between">
                <SearchComponent></SearchComponent>
                <button
                    class="mt-2 px-4 py-2 text-catskill-white-100 bg-gradient-to-r from-spray-600 to-spray-700 hover:bg-spray-700 rounded-xl">
                    + Add
                    MDA</button>
            </div>

            <div class="flex flex-wrap">
                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">MoH</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <router-link :to="{ name: 'MDA' }" class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                            </router-link>
                            <div class="p-1 bg-spray-200 rounded-full">
                                <PencilSquareIcon class="w-5 h-5 text-catskill-white-800"></PencilSquareIcon>
                            </div>
                            <div class="p-1 bg-flamingo-100 rounded-full">
                                <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">ESCOM</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 6</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 2</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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
                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">MBC</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">Ministry of
                                Finance</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">MoAgri</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">MRA</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">Ministry of Labour
                            </div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

                <div class="sm:w-3/12 w-12/12 p-2">
                    <div class="flex flex-col flex-wrap rounded-2xl bg-catskill-white-100 shadow-sm">
                        <div class="flex flex-col items-center p-4">
                            <div class="font-bold flex-1 text-lg text-catskill-white-800  mb-3">Ministry of Youth
                                and Sports</div>
                            <div class="text-sm"><span class="font-bold">Total accounts:</span> 4</div>
                            <div class="text-sm"><span class="font-bold">Active:</span> 3</div>
                            <div class="text-sm"><span class="font-bold">Domant:</span> 1</div>
                            <div class="text-sm"><span class="font-bold">Last updated:</span> 26-Oct-2023</div>
                        </div>
                        <div class="flex justify-center space-x-2 p-4 border-t border-t-athens-gray-500">
                            <div class="p-1 bg-dodger-blue-50 rounded-full">
                                <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
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

            </div>
            <PaginationComponent></PaginationComponent>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import PaginationComponent from '@/components/PaginationComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default {
    name: 'MDAsView',
    components: {
        EyeIcon, PencilSquareIcon, TrashIcon, PaginationComponent, SearchComponent, HeaderView
    },
    data() {
        return {
            headerTitle: "MDAs",
        }
    }
}
</script>