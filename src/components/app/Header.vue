<template>
  <div id="header" class="app-header relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <nav class="relative z-50 flex justify-between">
        <div class="flex items-center md:gap-x-12">
          <a aria-label="Home" href="/#">
            <img
              alt=""
              src="@/assets/images/logo.png"
              width="32"
              height="32"
              decoding="async"
              data-nimg="1"
              class="h-8 w-auto"
              style="color: transparent"
            />
          </a>
          <div class="hidden md:flex md:gap-x-6">
            <a
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#features"
              >Features</a
            ><a
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#testimonials"
              >Testimonials</a
            ><a
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#pricing"
              >Pricing</a
            >
          </div>
        </div>
        <div class="flex items-center gap-x-5 md:gap-x-8">
          <div class="hidden md:block">
            <a
              class="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
              href="/#"
              >Sign in</a
            >
          </div>
          <a
            class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
            href="/#"
            ><span>Get started <span class="hidden lg:inline">today</span></span></a
          >
          <div class="-mr-1 md:hidden">
            <div data-headlessui-state="">
              <button
                id="headlessui-popover-button-:R3p6:"
                class="relative z-10 flex h-8 w-8 items-center justify-center [&amp;:not(:focus-visible)]:focus:outline-none"
                aria-label="Toggle Navigation"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <svg
                  aria-hidden="true"
                  class="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                >
                  <path d="M0 1H14M0 7H14M0 13H14" class="origin-center transition"></path>
                  <path
                    d="M2 2L12 12M12 2L2 12"
                    class="origin-center transition scale-90 opacity-0"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'AppHeader',
    components: {},
    setup() {
      return {}
    },
  })
</script>
