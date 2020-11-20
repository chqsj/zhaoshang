import G6 from "@antv/g6";

const data = {
  // 点集
  nodes: [
    {
      id: "node1", // String，该节点存在则必须，节点的唯一标识
      x: 100, // Number，可选，节点位置的 x 值
      y: 100, // Number，可选，节点位置的 y 值
      consumingTime: "1931",
      signin: "APP",
      createTime: "14:04:26",
    },
    {
      id: "node2", // String，该节点存在则必须，节点的唯一标识
      x: 350, // Number，可选，节点位置的 x 值
      y: 100, // Number，可选，节点位置的 y 值
      consumingTime: "131",
      signin: "IFanCalendar",
      createTime: "14:04:26",
    },
    {
      id: "node3", // String，该节点存在则必须，节点的唯一标识
      x: 600, // Number，可选，节点位置的 x 值
      y: 100, // Number，可选，节点位置的 y 值
      consumingTime: "569",
      signin: "北京公积金",
      createTime: "14:04:26",
    },
    {
      id: "node4", // String，该节点存在则必须，节点的唯一标识
      x: 600, // Number，可选，节点位置的 x 值
      y: 300, // Number，可选，节点位置的 y 值
      consumingTime: "1931",
      signin: "APP",
      createTime: "14:04:26",
    },
  ],
  // 边集
  edges: [
    {
      source: "node1", // String，必须，起始点 id
      target: "node2", // String，必须，目标点 id
    },
    {
      source: "node2", // String，必须，起始点 id
      target: "node3", // String，必须，目标点 id
    },
    {
      source: "node3", // String，必须，起始点 id
      target: "node4", // String，必须，目标点 id
    },
  ],
};

let textXML = (cfg) => `
<rect style={{ width: 160, height: 140, radius: 8 }}
keyshape="true" name="test"
cursor="move">
<rect style={{
  width: 120, height: 65, fill: '#ff1700', radius:6,marginTop: 10, marginLeft: 20
}}>
<text style={{ 
  textAlign: 'center',
  marginTop: 23,
  marginLeft: 80,
  fill: '#fff' }}>${cfg.consumingTime}毫秒</text>
  <text style={{ 
    textAlign: 'center',
    marginTop: 60,
    marginLeft: 80,
    fontWeight: 'bold',
    fill: '#fff' }}>${cfg.signin}</text>
    <text style={{ 
      textAlign: 'center',
      marginTop: 70,
      marginLeft: 80,
      fill: '#757d97' }}>${cfg.createTime}</text>
</rect>
</rect>
`;
