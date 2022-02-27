<template>
  <div class="billboard-cookie" style="display: none;" />
</template>
<script>
import cookies from 'js-cookie';

export default {
  props: {
    adUnitPath: {
      type: String,
      required: true,
    },
    cookieName: {
      type: String,
      required: true,
    },
    cookieValue: {
      type: String,
      default: '0',
    },
    expires: {
      type: Number,
      default: 1,
    },
  },
  created() {
    const { googletag } = window;
    if (!googletag) return;
    googletag.cmd.push(() => {
      googletag.pubads().addEventListener('slotOnload', (event) => {
        if (event.slot.getAdUnitPath() === this.adUnitPath) {
          cookies.set(this.cookieName, this.cookieValue, { expires: this.expires });
        }
      });
    });
  },
};
</script>
