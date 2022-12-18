//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Colors} from '../../utils/theme';
import CmpDropdown from './CmpDropdown';

// create a component
const CustomDropdown = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>CmpDropdown</Text>
      <CmpDropdown />
      <Text style={styles.heading2}>CmpDropdown</Text>
      <Text style={styles.loremStyle}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sint
        pariatur repudiandae quo esse, consequatur asperiores voluptates
        accusantium. Aperiam ipsa accusantium possimus libero ratione veritatis
        architecto tenetur cupiditate modi, nemo velit, sint eveniet? Corrupti,
        sint deserunt. Aperiam repellat doloremque suscipit hic eum sequi
        repudiandae, in obcaecati necessitatibus impedit? Earum expedita magnam
        modi, similique soluta corrupti at, nesciunt ea rem architecto id fugiat
        ullam atque, nisi ipsum voluptates dignissimos cupiditate saepe delectus
        labore consectetur! Magnam totam blanditiis, aliquam nemo dignissimos
        excepturi explicabo consectetur qui ex porro exercitationem, natus minus
        culpa? Quis eum beatae rerum nam pariatur accusantium nisi quo dolor
        quas similique deserunt, aliquam soluta obcaecati veniam harum
        exercitationem reprehenderit natus maiores. Dolorum est esse veritatis
        perspiciatis! Expedita laudantium obcaecati aspernatur. Nostrum atque a
        laborum ipsa alias pariatur quo odio, obcaecati beatae doloremque dolore
        expedita officiis dolorem tenetur illum iusto voluptatibus? Fugiat
        necessitatibus sit accusamus adipisci, in officia ut hic provident
        numquam aperiam, reiciendis sunt! Dolorum, aut natus assumenda fuga nemo
        quo facilis repellat. Atque necessitatibus eos distinctio nam incidunt,
        libero porro aspernatur esse ducimus corporis ut sunt maiores
        voluptatem? Voluptate dolorem et, ea ducimus at amet omnis neque quaerat
        unde minima exercitationem reprehenderit magnam harum porro eveniet,
        accusantium eum mollitia, ipsa suscipit maxime quibusdam? Cumque
        voluptatum totam sunt in odit maxime non! Debitis reiciendis ullam illum
        libero in amet consectetur, vel deserunt repudiandae, iure explicabo
        quis cumque odit illo fugit temporibus reprehenderit velit saepe laborum
        tenetur. Omnis, optio reprehenderit? Commodi nihil veritatis sed
        adipisci, nostrum, consequatur earum natus distinctio assumenda
        laboriosam aliquam sit obcaecati hic numquam quo vitae ratione. Minus,
        voluptatibus accusantium. Similique libero hic qui culpa sed non
        incidunt laudantium quaerat placeat amet, ut repellendus enim nostrum
        recusandae facere rem corporis exercitationem odio tempore ratione
        repellat possimus sint? Quae praesentium perferendis possimus magni!
        Molestias enim temporibus a itaque dicta illo cupiditate amet modi in
        aliquid, eius placeat reprehenderit unde est, officia hic eveniet totam
        sequi illum dolores esse natus, quae delectus consectetur. Accusantium
        magnam a ad maiores omnis ex, commodi assumenda? Consectetur quae illo
        rem repellendus, sed est voluptas quod soluta nobis iste ad tempora
        voluptatum magni eum. Eligendi minima praesentium quidem numquam fugiat.
        Iusto sapiente sit assumenda quia. Vel repellendus harum provident
        corrupti maiores? Magni, enim. Soluta voluptate cupiditate voluptatibus
        possimus repellendus nihil incidunt, ea, quae neque amet sit molestias
        tempora unde similique? Incidunt illum temporibus blanditiis quaerat
        neque esse animi quos cupiditate consequuntur, amet, officia beatae
        voluptatum doloribus! Sapiente cupiditate fugit error, aliquam
        laboriosam necessitatibus repellendus. Magni aut ea possimus sunt ad.
        Reiciendis, repellendus ipsam. Sequi repudiandae tempora eos illo saepe
        ipsa, accusantium, ad ipsum fuga itaque, cum magnam debitis iure optio
        neque voluptates enim. Voluptatibus ex cumque maiores incidunt veniam
        ullam nisi itaque similique assumenda inventore delectus, natus
        accusantium? Aperiam fugiat delectus eveniet perferendis doloremque, a
        blanditiis repellat perspiciatis enim, voluptatibus expedita facere eos
        possimus? Adipisci nesciunt modi, voluptatum, perspiciatis labore
        recusandae fuga sint quae tempora, ex nobis cumque nemo qui est repellat
        cupiditate fugiat magnam fugit reprehenderit quo vero? Repudiandae omnis
        quis iusto deleniti placeat!
      </Text>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 50,
    marginBottom: 20,
    alignSelf: 'center',
    color: Colors.textColor,
  },
  loremStyle: {
    color: 'black',
  },
  heading2: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
    color: Colors.textColor,
  },
});

//make this component available to the app
export default CustomDropdown;
