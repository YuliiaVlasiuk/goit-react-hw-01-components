
export const Statistics = ({title,items}) => (
    <section className="statistics"
    style={{ 
    width: '400px',
    border: '1px solid grey',
    borderRadius: '4px',
    marginTop:'20px'
    }} >
     
    <h2 className="title">{title}</h2>
  
    <ul className="stat-list" style={{
        listStyle:'none',
        display:'flex',
        padding:'0px',
        margin:'0px',
        height:'50px'
       

    }}>
      <li className="item"

      style={{ backgroundColor:'red',
      width:'100px',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
flexDirection:'column'

      }}
      >
        <span className="label">{items[0].label}</span>
        <span className="percentage">{items[0].percentage}%</span>
      </li>
      <li className="item"
        style={{ backgroundColor:'green',
        width:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
  flexDirection:'column'
    }}>
        <span className="label">{items[1].label}</span>
        <span className="percentage">{items[1].percentage}%</span>
      </li>
      <li className="item"style={{ backgroundColor:'burlywood',
        width:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
  flexDirection:'column'
    }}>
        <span className="label">{items[2].label}</span>
        <span className="percentage">{items[2].percentage}%</span>
      </li>
      <li className="item" style={{ backgroundColor:'yellow',
        width:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
  flexDirection:'column'
    }}>
        <span className="label">{items[3].label}</span>
        <span className="percentage">{items[3].percentage}%</span>
      </li>
      <li className="item" style={{ backgroundColor:'blueviolet',
        width:'100px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:'100%',
  flexDirection:'column'
    }}>
        <span className="label">{items[4].label}</span>
        <span className="percentage">{items[4].percentage}%</span>
      </li>
    </ul> 
  </section>







//     <ul>
//     {items.map(item => (
//       <li key={item.id}>{item.label}</li>
//     ))}
//   </ul>
  
   
              
)



  
// <section className="statistics">
//   <h2 className="title">{title}</h2>

//  <ul className="stat-list">
//     <li className="item">
//       <span className="label">{item[0].label}.docx</span>
//       <span className="percentage">4%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp3</span>
//       <span className="percentage">14%</span>
//     </li>
//     <li className="item">
//       <span className="label">.pdf</span>
//       <span className="percentage">41%</span>
//     </li>
//     <li className="item">
//       <span className="label">.mp4</span>
//       <span className="percentage">12%</span>
//     </li>
//   </ul> 
// </section>
//     // );
//   };
  
// const Recipe = ({ item: { username, avatar, tag } }) => {
//     return (
//       <div>
//         <Image src={avatar} alt={username} width="240p" />
//         <h2>{username}</h2>
//         <BsFillAlarmFill />
  
//         <div>
//           <span>{tag} tag</span>
//         </div>
//       </div>
//     );
//   };

