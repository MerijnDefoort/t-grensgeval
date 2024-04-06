<script>
export default {}
</script>

<template>
  <div class="flex flex-col overflow-x-hidden">
    <div
      class="flex flex-col relative max-lg:h-[370px] h-[740px] justify-center items-center bg-bg-200"
    >
      <img src="@/assets/icons/Favicon.png" class="w-1/2 max-xl:w-2/3 mix-blend-darken" alt="" />
      <div
        class="z-10 border-l-solid absolute max-lg:h-14 h-20 w-1.5 border-l-[1px] max-lg:-bottom-7 -bottom-10"
      ></div>
    </div>
    <div class="relative w-100 bg-bg-100 h-[1638px]">
      <div class="z-10 mt-48 flex flex-col text-center items-center justify-center">
        <p class="text-accent font-catamaran text-8xl font-bold">"</p>
        <p class="text-5xl w-1/2 font-light mb-16">
          Sometimes the most productive thing you can do is to relax.
        </p>
      </div>
      <div class="flex justify-center">
        <img
          src="@/assets/images/Bedroom.jpg"
          class="w-[428px] rounded-3xl top-64 -left-5 absolute"
          alt=""
        />
        <img src="@/assets/images/Seats.jpg" class="w-[496px] mt-16 rounded-3xl" alt="" />
        <img
          src="@/assets/images/Washroom.jpg"
          class="w-[424px] rounded-3xl -right-5 bottom-48 absolute"
          alt=""
        />
      </div>
    </div>
    <div class="p-12 bg-bg-200 flex flex-col justify-center items-center text-center">
      <h1 class="text-7xl font-light mb-16">TEAMWORK MAKES THE DREAM WORK</h1>
      <p class="text-3xl font-extralight w-2/3">
        Na maanden eigenhandig verbouwen kunnen we jullie eindelijk verwelkomen in onze gloednieuwe
        vakantiewoning. Samen met onze ouders gingen we van breekwerken tot metselwerken, van
        dakwerken tot de laatste afwerkingen. Op deze manier kunnen we stellen dat we ons hart en
        ziel gelegd hebben in deze vakantiewoning. We blijven met positieve blik kijken naar de
        toekomst en hopen jullie te kunnen bekoren met ons verblijf en de streek.
      </p>
      <div class="flex mt-48 flex-col relative justify-center items-center">
        <button
          class="rounded-3xl absolute border-solid border-black border-2 hover:border-2 hover:bg-primary-100 hover:border-primary-100 hover:text-bg-100 bg-bg-200 w-1/6 text-2xl font-semibold py-2 px-4"
          onclick="window.location.href = '/Contact'"
        >
          CONTACT
        </button>
        <div class="border-b-2 border-black w-2/3"></div>
      </div>
    </div>
  </div>
</template>
