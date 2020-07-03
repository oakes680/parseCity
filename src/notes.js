  // const con = (e) => {
  //   console.log("con", excel2.rows);
  //   for (let i = 1; i < excel2.rows.length; i++) {
  //     if (ob["style_description"] === null) {
  //       ob["style_description"] = excel2.rows[i][33];
  //     }
  //     if (ob["color"] === null) {
  //       ob["color"] = excel2.rows[i][31];
  //     }

  //     let splitSize = excel2.rows[i][36].split(",");
  //     let size = "";
  //     let count = 0;
  //     for (let i = 0; i < splitSize.length; i++) {
  //       for (let k = 0; k < splitSize[i].length; k++) {
  //         if (splitSize[i][k].match(letters)) {
  //           size += splitSize[i][k];
  //         }
  //         let num = parseInt(splitSize[i][k]);
  //         if (Number.isInteger(num)) {
  //           count = parseInt(splitSize[i][k]);
  //         }
  //       }

  //       theOne(size, count);

  //       size = "";
  //       count = 0;
  //     }

  //     testObj2["lineitems_attributes"].push({ ...ob });

  //     for (let key in ob) {
  //       ob[key] = null;
  //     }
  //     // console.log('testobj2', testObj2)
  //   }
  //   console.log("testobj2", testObj2);
  // };

  ////////////////////////////////////********************************************************* */////////////////////////



  // for (let k = 0; k < excel2.rows[k].length; k++) {
  //   // console.log(excel2.rows[i][k])

  // }
  // excel2.rows[i][31]
  // excel2.rows[i][24]




//   useEffect(() => {
//     axios
//       .get(
//         `https://www.printavo.com/api/v1/customers/search?version=${version}&email=${email}&token=${token}&query=${query}`
//       )
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   }, []);