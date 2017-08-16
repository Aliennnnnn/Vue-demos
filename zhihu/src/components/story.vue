<template>
<div>
    <top-story :arr="newsList"></top-story>
</div>
</template>

<script type="text/javascript">
import topStory from './container/topStory.vue'
export default{
    components: {
        topStory
    },
    created: function () {
        this.$http.get('/api/topStory')
        .then((res) => {
          this.newsList = res.data
        }, (err) => {
          console.log(err)
        })
    },
    data() {
        return {
            newsList: []
        }
    }
}
</script>