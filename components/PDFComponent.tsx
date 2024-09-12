import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: "0px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  //   first section
  sectionone: {
    marginBottom: 0,
    width: "28%",
    backgroundColor: "#3B82F6",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "5px",
    paddingBottom: "10px",
  },
  name: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "40px",
    fontSize: "20px",
  },
  designation: {
    color: "yellow",
    textAlign: "center",
    marginTop: "10px",
    lineHeight: "1.5px",
  },
  personalinfo: {
    color: "white",
    marginLeft: "2px",
    fontSize: "17px",
  },
  listItem: {
    flexDirection: "row",
    marginBottom: 0,
    marginLeft: "2px",
  },
  bulletPoint: {
    width: 10,
    fontSize: 25,
    marginTop: "3px",
  },
  itemContent: {
    fontSize: 15,
    marginTop: "6px",
    color: "yellow",
    marginLeft: "4px",
  },
  itemContent2: {
    fontSize: 15,
    marginLeft: "8px",
    marginBottom: "2px",
  },
  listItemContact: {
    flexDirection: "column",
    marginBottom: 0,
    marginLeft: "2px",
    width: "180px",
  },
  itemContact: {
    fontSize: 14,
    marginTop: "6px",
    color: "yellow",
    marginLeft: "4px",
  },
  itemContact2: {
    fontSize: 13,
    marginLeft: "8px",
    marginTop: "2px",
    wordBreak: "break-all",
    overflow: "hidden",
  },
  //second section
  sectiontwo: {
    width: "72%",
    backgroundColor: "white",
    padding: "5px",
    paddingRight:'10px',
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    paddingTop:'10px',
    paddingBottom:'10px'
  },
  mainheading: {
    color: "#2563EB",
    fontSize: "18px",
    marginBottom: "2px",
  },
  container: {
    marginBottom: "3px",
    marginTop: "3px",
  },
  subcontainer: {
    marginBottom: "3px",
    marginTop: "3px",
  },
  paragraph: {
    fontSize: "14px",
  },
  bulletSubPoint: {
    width: 10,
    fontSize: 25,
    marginBottom: "2px",
  },
  itemSubContent: {
    fontSize: 15,
    marginTop: "3px",
    color: "green",
    marginLeft: "4px",
  },
  itemSubContent2: {
    fontSize: 15,
    marginLeft: "8px",
    marginTop: "3px",
    color: "Darkgray",
  },
  skilllistItem: {
    flexDirection: "row",
    marginBottom: 0,
    marginLeft: "2px",
  },
  skillbulletPoint: {
    width: 10,
    fontSize: 25,
    marginTop: "3px",
  },
  skillitemContent: {
    fontSize: 15,
    marginTop: "6px",
    color: "green",
    marginLeft: "4px",
  },
  skillitemContent2: {
    fontSize: 13,
    marginLeft: "8px",
    marginBottom: "2px",
  },
  skillcontainer: {
    marginBottom: "3px",
    marginTop: "3px",
    display: "flex",
    flexDirection: "row",
  },
  skillsubcontainer: {
    marginBottom: "3px",
    marginTop: "3px",
    width: "32%",
  },
  explistItem: {
    flexDirection: "row",
    marginBottom: 0,
    marginLeft: "2px",
  },
  expbulletPoint: {
    width: 10,
    fontSize: 25,
    marginTop: "3px",
  },
  expitemContent: {
    fontSize: 15,
    marginTop: "6px",
    color: "green",
    marginLeft: "4px",
  },
  expitemContent2: {
    fontSize: 13,
    marginLeft: "8px",
    marginBottom: "2px",
  },
  expcontainer: {
    marginBottom: "3px",
    marginTop: "3px",
    display: "flex",
    flexDirection: "column",
  },
  expsubcontainer: {
    marginBottom: "3px",
    marginTop: "3px",
  },
});

const PDFComponent = ({ formData }:any) => (
  <Document>
    <Page size={"A4"} style={styles.page}>
      <View style={styles.sectionone}>
        {/* name or designation  */}
        <View>
          <Text style={styles.name}>{formData.name}</Text>
          <Text style={styles.designation}>{formData.designation}</Text>
        </View>
        {/* personal info  */}
        <View>
          <Text style={styles.personalinfo}>Personal Info:</Text>
          <View>
            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemContent}>Father Name:</Text>
            </View>
            <Text style={styles.itemContent2}>{formData.fname}</Text>

            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemContent}>Religion:</Text>
            </View>
            <Text style={styles.itemContent2}>{formData.religion}</Text>

            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemContent}>Age:</Text>
            </View>
            <Text style={styles.itemContent2}>{formData.age}</Text>

            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemContent}>Nationality:</Text>
            </View>
            <Text style={styles.itemContent2}>{formData.nationality}</Text>

            <View style={styles.listItem}>
              <Text style={styles.bulletPoint}>•</Text>
              <Text style={styles.itemContent}>Domicile:</Text>
            </View>
            <Text style={styles.itemContent2}>{formData.domicile}</Text>
          </View>
        </View>
        {/* contact detail  */}
        <View>
          <Text style={styles.personalinfo}>Contact</Text>

          <View style={styles.listItemContact}>
            <Text style={styles.itemContact}>Number:</Text>
            <Text style={styles.itemContact2}>{formData.phone}</Text>
          </View>

          <View style={styles.listItemContact}>
            <Text style={styles.itemContact}>Email:</Text>
            <Text style={styles.itemContact2}>{formData.email}</Text>
          </View>

          <View style={styles.listItemContact}>
            <Text style={styles.itemContact}>Address:</Text>
            <Text style={styles.itemContact2}>
            {formData.address}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.sectiontwo}>
        {/* objective  */}
        <View style={styles.container}>
          <Text style={styles.mainheading}>Objective :</Text>
          <Text style={styles.paragraph}>
          {formData.objective}
          </Text>
        </View>
        {/* education  */}
        <View style={styles.container}>
          <Text style={styles.mainheading}>Education :</Text>
          {/* matriculation  */}
          <View style={styles.subcontainer}>
            <Text>Matriculation</Text>
            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Institute Name:</Text>
              <Text style={styles.itemSubContent2}>{formData.school}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Year Of Complete:</Text>
              <Text style={styles.itemSubContent2}>{formData.schoolyear}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Grade/GPA:</Text>
              <Text style={styles.itemSubContent2}>{formData.schoolgrade}</Text>
            </View>
          </View>
          {/* intermediate */}
          <View style={styles.subcontainer}>
            <Text>Intermediate</Text>
            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Institute Name:</Text>
              <Text style={styles.itemSubContent2}>{formData.college}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Year Of Complete:</Text>
              <Text style={styles.itemSubContent2}>{formData.collegeyear}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Grade/GPA:</Text>
              <Text style={styles.itemSubContent2}>{formData.collegegrade}</Text>
            </View>
          </View>
          {/* university  */}
          <View style={styles.subcontainer}>
            <Text>Intermediate</Text>
            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Institute Name:</Text>
              <Text style={styles.itemSubContent2}>{formData.university}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Year Of Complete:</Text>
              <Text style={styles.itemSubContent2}>{formData.universityyear}</Text>
            </View>

            <View style={styles.listItem}>
              <Text style={styles.bulletSubPoint}>•</Text>
              <Text style={styles.itemSubContent}>Grade/GPA:</Text>
              <Text style={styles.itemSubContent2}>{formData.universitygrade}</Text>
            </View>
          </View>
        </View>
        {/* skills  */}
        <View style={styles.container}>
          <Text style={styles.mainheading}>Skills :</Text>
          <View style={styles.skillcontainer}>
            <View style={styles.skillsubcontainer}>
              <View style={styles.skilllistItem}>
                <Text style={styles.skillbulletPoint}>•</Text>
                <Text style={styles.skillitemContent}>{formData.firstskillname}:</Text>
              </View>
              <Text style={styles.skillitemContent2}>
              {formData.firstdescription}
              </Text>
            </View>

            <View style={styles.skillsubcontainer}>
              <View style={styles.skilllistItem}>
                <Text style={styles.skillbulletPoint}>•</Text>
                <Text style={styles.skillitemContent}>{formData.secondskillname}:</Text>
              </View>
              <Text style={styles.skillitemContent2}>
              {formData.seconddescription}
              </Text>
            </View>

            <View style={styles.skillsubcontainer}>
              <View style={styles.skilllistItem}>
                <Text style={styles.skillbulletPoint}>•</Text>
                <Text style={styles.skillitemContent}>{formData.thirdskillname}:</Text>
              </View>
              <Text style={styles.skillitemContent2}>
              {formData.thirddescription}
              </Text>
            </View>
          </View>
        </View>
        {/* experience  */}

        <View style={styles.container}>
          <Text style={styles.mainheading}>Experience :</Text>
          <View style={styles.expcontainer}>
            <View style={styles.expsubcontainer}>
              <View style={styles.explistItem}>
                <Text style={styles.expbulletPoint}>•</Text>
                <Text style={styles.expitemContent}>{formData.firstofficename}:</Text>
              </View>
              <Text style={styles.skillitemContent2}>
              {formData.firstexpdescription}
              </Text>
            </View>

            <View style={styles.expsubcontainer}>
              <View style={styles.explistItem}>
                <Text style={styles.expbulletPoint}>•</Text>
                <Text style={styles.expitemContent}>{formData.secondofficename}:</Text>
              </View>
              <Text style={styles.expitemContent2}>
              {formData.secondexpdescription}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

const PDFDownload = ({ formData }:any) => (
  <PDFDownloadLink className='w-64 bg-blue-500 ml-8 hover:bg-blue-700 text-center text-white font-bold py-5 px-12 my-4 rounded' document={<PDFComponent formData={formData} />} fileName={formData.name}>
    {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
  </PDFDownloadLink>
);

export default PDFDownload;
// export default PDFComponent;
