<template>
  <div class="count-wrap">
    <div class="count">
      5
    </div>
  </div>
</template>

<script>
export default {
  name: 'count',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.count-wrap {
  height: 100vh;
  position: relative;
  background: #FF9D00;
}

.count {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
}

</style>
