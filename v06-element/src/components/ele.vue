<template>
  <div>
    <div>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
    <p></p>
    <div>
      <el-dropdown split-button type="primary" placement="top">
        默认尺寸
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item>双皮奶</el-dropdown-item>
          <el-dropdown-item>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

    <p>tab</p>

    <div>
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>

      <el-tabs :tab-position="tabPosition" style="height: 200px;">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>

    <p>Breadcrumb 面包屑</p>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

    </div>
    <p>单选按钮</p>
    <div>
      <div>
        <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
        <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
      </div>
    </div>

    <p>
      多选项按钮
    </p>
    <div>
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>

    <p>
      输入框
    </p>
    <div>
      <el-input
        placeholder="请输入内容"
        v-model="input10"
        clearable>
      </el-input>

    </div>

    <p>
      计数器
    </p>
    <div>
      <el-input-number v-model="num3" :step="2"></el-input-number>
    </div>

    <p>
      select
    </p>
    <div>
      <el-select v-model="value41" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <p>
      switch开关
    </p>

    <div>
      <el-switch
        v-model="value3"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
      <el-switch
        style="display: block"
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="按月付费"
        inactive-text="按年付费">
      </el-switch>
    </div>

  </div>


</template>

<script>
  const cityOptions = ['上海', '北京', '广州', '深圳'];
  export default {
    name: 'ele',
    data() {
      return {
        tabPosition: 'top',
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1',
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        input10: '',
        num3: 5,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value41: '',
        value3: true,
        value4: true
    }
  }
  ,
  methods: {
    handleCheckAllChange(val)
    {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    }
  ,
    handleCheckedCitiesChange(value)
    {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
  }
</script>

<style scoped>

</style>
