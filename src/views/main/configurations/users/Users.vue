<template>
    <div class="flex flex-col space-y-4 flex-1">
        <HeaderView :headerTitle="headerTitle"></HeaderView>
        <div class="flex flex-col space-y-4">
            <div class=" flex justify-between">
                <SearchComponent></SearchComponent>
                <button
                    class="mt-2 px-4 py-2 text-catskill-white-100 bg-gradient-to-r from-spray-600 to-spray-700 hover:bg-spray-700 rounded-xl">
                    + Add
                    User</button>
            </div>
            <div class="rounded-2xl bg-catskill-white-100 shadow-sm p-4">
                <div class="flex flex-row bg-athens-gray-500 p-2 text-sm font-bold">
                    <div class="sm:w-3/12">Product name</div>
                    <div class="sm:w-3/12">Generic name</div>
                    <div class="sm:w-3/12">Date of entry #</div>
                    <div class="sm:w-2/12">Expiry date</div>
                    <div class="sm:w-1/12">Action</div>
                </div>
                <div class="flex flex-row bg-athens-gray-400 p-2 text-sm items-center">
                    <div class="sm:w-3/12">Tylenol</div>
                    <div class="sm:w-3/12">Acetaminophen</div>
                    <div class="sm:w-3/12">20/10/2023</div>
                    <div class="sm:w-2/12">20/09/2027</div>
                    <div class="flex space-x-2 sm:w-1/12">
                        <div class="p-1 bg-dodger-blue-50 rounded-full">
                            <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                        </div>
                        <div class="p-1 bg-spray-200 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-spray-700"></PencilSquareIcon>
                        </div>
                        <div class="p-1 bg-flamingo-100 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row bg-athens-gray-100 p-2 text-sm items-center">
                    <div class="sm:w-3/12">Advil</div>
                    <div class="sm:w-3/12">Ibuprofen</div>
                    <div class="sm:w-3/12">20/10/2023</div>
                    <div class="sm:w-2/12">20/09/2027</div>
                    <div class="flex space-x-2 sm:w-1/12">
                        <div class="p-1 bg-dodger-blue-50 rounded-full">
                            <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                        </div>
                        <div class="p-1 bg-spray-200 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-spray-700"></PencilSquareIcon>
                        </div>
                        <div class="p-1 bg-flamingo-100 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row bg-athens-gray-400 p-2 text-sm items-center">
                    <div class="sm:w-3/12">Allegra</div>
                    <div class="sm:w-3/12">Fexofenadine</div>
                    <div class="sm:w-3/12">20/10/2023</div>
                    <div class="sm:w-2/12">20/09/2027</div>
                    <div class="flex space-x-2 sm:w-1/12">
                        <div class="p-1 bg-dodger-blue-50 rounded-full">
                            <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                        </div>
                        <div class="p-1 bg-spray-200 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-spray-700"></PencilSquareIcon>
                        </div>
                        <div class="p-1 bg-flamingo-100 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                        </div>
                    </div>
                </div>

                <div class="flex flex-row bg-athens-gray-100 p-2 text-sm items-center">
                    <div class="sm:w-3/12">Lipitor</div>
                    <div class="sm:w-3/12">Atorvastatin</div>
                    <div class="sm:w-3/12">20/10/2023</div>
                    <div class="sm:w-2/12">20/09/2027</div>
                    <div class="flex space-x-2 sm:w-1/12">
                        <div class="p-1 bg-dodger-blue-50 rounded-full">
                            <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                        </div>
                        <div class="p-1 bg-spray-200 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-spray-700"></PencilSquareIcon>
                        </div>
                        <div class="p-1 bg-flamingo-100 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row bg-athens-gray-400 p-2 text-sm items-center">
                    <div class="sm:w-3/12">Prozac</div>
                    <div class="sm:w-3/12">Fluoxetine</div>
                    <div class="sm:w-3/12">20/10/2023</div>
                    <div class="sm:w-2/12">20/09/2027</div>
                    <div class="flex space-x-2 sm:w-1/12">
                        <div class="p-1 bg-dodger-blue-50 rounded-full">
                            <EyeIcon class="w-5 h-5 text-catalina-blue-300"></EyeIcon>
                        </div>
                        <div class="p-1 bg-spray-200 rounded-full">
                            <PencilSquareIcon class="w-5 h-5 text-spray-700"></PencilSquareIcon>
                        </div>
                        <div class="p-1 bg-flamingo-100 rounded-full">
                            <TrashIcon class="w-5 h-5 text-flamingo-500"></TrashIcon>
                        </div>
                    </div>
                </div>
                <PaginationComponent></PaginationComponent>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderView from '@/includes/Header.vue'
import { EyeIcon, PencilSquareIcon, TrashIcon } from '@heroicons/vue/24/solid'
import PaginationComponent from '@/components/PaginationComponent.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default {
    name: 'UsersView',
    components: {
        EyeIcon, PencilSquareIcon, TrashIcon, PaginationComponent, SearchComponent, HeaderView
    },
    data() {
        return {
            headerTitle: "System Users",
        }
    }
}
</script>