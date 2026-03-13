export const news6 = {
  id: '06',
  slug: 'capacity-debottlenecking-and-efficiency-improvement',
  category: 'Operational Excellence',
  layoutType: 'cinematic',
  themeColor: '#D9FF4A',
  title: 'Capacity Debottlenecking & Efficiency Improvement',
  quote: "Unlock the latent potential of existing assets. We remove bottlenecks through targeted technical upgrades to increase throughput and performance.",
  image: '/images/sustainability/news-06.png',
  content: {
    headline: 'Capacity Debottlenecking',
    subheadline: 'Unlocking Latent Potential via Equipment Revamps.',
    introduction: 'We utilize advanced process simulation and world-class physical-property databases to revamp existing units. By identifying bottlenecks, we achieve significant throughput increases with minimal footprint changes.',
    sections: [
      {
        title: 'Technology Application',
        body: 'Leveraging best-in-class column internals and plant performance rating, we transform existing infrastructure into high-capacity units.',
        advantages: [
          'Significant enhancement in unit processing capacity',
          'Removing operational constraints through targeted revamps',
          'Integration of world-class tower internals'
        ]
      },
      {
        title: 'Performance Comparison (Before vs After Revamp)',
        body: 'Typical improvements observed following targeted technical debottlenecking.',
        // 下面我们将表格数据作为特殊的 sections 处理
        tableData: [
          { label: 'Plant Throughput (t/y)', before: '100', after: 'Increase ↑ 6%–30%' },
          { label: 'Total Column Pressure Drop (kPa)', before: '1', after: 'Decrease ↓ 10%–50%' },
          { label: 'Reflux Ratio', before: '2', after: 'Decrease ↓ 10%–30%' }
        ]
      }
    ]
  }
};