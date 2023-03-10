import '../../assets/css/general.css';

// import { Card } from 'antd';
// const { Meta } = Card;
// function UserList({ users }) {
//   console.log(users.payload);
//   return (
//     <>
//       {Array.isArray(users.payload) && users.payload.length > 0 ? (
//         users.payload.map(user => (
//           <Card
//             key={user.id}
//             hoverable
//             style={{
//               width: 240,
//               margin: '10px',
//             }}
//             cover={
//               <img
//                 alt={`${user.first_name} ${user.last_name}`}
//                 src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
//               />
//             }
//           >
//             <Meta
//               title={`${user.first_name} ${user.last_name}`}
//               description={`Languages spoken: ${user.languages_speak.first}, ${user.languages_speak.second}`}
//             />
//           </Card>
//         ))
//       ) : (
//         <div>No users found.</div>
//       )}
//     </>
//   );
// }
// export default UserList;

//🍉
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

function UserList({ users }) {
  console.log(users.payload);
  return (
    <>
      {Array.isArray(users.payload) && users.payload.length > 0 ? (
        users.payload.map(user => (
          <Card
            key={user.id}
            hoverable
            style={{
              width: 300,
              display: 'inline-block',
              margin: '4em',
            }}
            cover={
              <img
                alt={`${user.first_name} ${user.last_name}`}
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              />
            }
          >
            <Meta
              title={`${user.first_name} ${user.last_name}`}
              description={`Languages spoken: ${user.languages_speak.join(
                ', '
              )}`}
            />
            <Meta
              description={`Languages spoken: ${user.languages_interested.join(
                ', '
              )}`}
            />
          </Card>
        ))
      ) : (
        <div>No users found.</div>
      )}
    </>
  );
}

export default UserList;

//🍉

//API for contry https://restcountries.com/v3.1/name/iran
