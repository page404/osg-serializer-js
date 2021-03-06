const ObjectWrapperManager = require('../Serializer/ObjectWrapperManager');
const EnumSerializer = require('../Serializer/EnumSerializer');
const ObjectSerializer = require('../Serializer/ObjectSerializer');
const UserSerializer = require('../Serializer/UserSerializer');
const PropByValSerializer = require('../Serializer/PropByValSerializer');
const ObjectWrapper = require('../Serializer/ObjectWrapper');
const ObjectClass = require('../OsgTypes/Object');
const ObjectDataVariance = require('../Enum/ObjectData_Variance');

let objectWrapper = new ObjectWrapper(
    "osg::Object",
    ["osg::Object"],
    ObjectClass
);

function UserDataReader(){
    // TODO
    throw "UserDataReader not yet supported";
}

objectWrapper.addSerializer(new PropByValSerializer("String","Name",""));
objectWrapper.addSerializer(new EnumSerializer("DataVariance",ObjectDataVariance,ObjectDataVariance.UNSPECIFIED));

objectWrapper.addSerializer(new UserSerializer("UserData",UserDataReader, {maxVersion:76}));
objectWrapper.addSerializer(new ObjectSerializer("UserDataContainer",null, {minVersion:77}));

ObjectWrapperManager.addWrapper(objectWrapper);