<template>
  <div class="section flex rank-section">
    <rank-row v-for="(row, index) in 3" :key="index"></rank-row>
  </div>    
</template>

<script>
import RankRow from "@components/user-rank/user-rank-row"
export default {
  components: {
    RankRow
  }
}
</script>

<style lang="stylus" scoped>
.rank-section {
  margin-top 20px
  justify-content space-around
}
</style>