'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var colors = require('colors'),
    LogColors = require('./entities/LogColors.js'),
    IPC = require('./services/IPC.js');

var IPCModule = function (_IPC) {
    _inherits(IPCModule, _IPC);

    function IPCModule() {
        _classCallCheck(this, IPCModule);

        //include IPC to make extensible

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IPCModule).call(this));

        Object.defineProperty(_this, 'IPC', {
            enumerable: true,
            writable: false,
            value: IPC
        });
        return _this;
    }

    return IPCModule;
}(IPC);

colors.setTheme(new LogColors());

module.exports = new IPCModule();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGUtaXBjL25vZGUtaXBjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLElBQU0sU0FBUyxRQUFRLFFBQVIsQ0FBVDtJQUNGLFlBQVksUUFBUSx5QkFBUixDQUFaO0lBQ0EsTUFBTSxRQUFRLG1CQUFSLENBQU47O0lBRUU7OztBQUNGLGFBREUsU0FDRixHQUFhOzhCQURYLFdBQ1c7Ozs7MkVBRFgsdUJBQ1c7O0FBR1QsZUFBTyxjQUFQLFFBRUksS0FGSixFQUdJO0FBQ0ksd0JBQVcsSUFBWDtBQUNBLHNCQUFTLEtBQVQ7QUFDQSxtQkFBTSxHQUFOO1NBTlIsRUFIUzs7S0FBYjs7V0FERTtFQUFrQjs7QUFpQnhCLE9BQU8sUUFBUCxDQUFnQixJQUFJLFNBQUosRUFBaEI7O0FBRUEsT0FBTyxPQUFQLEdBQWUsSUFBSSxTQUFKLEVBQWYiLCJmaWxlIjoibm9kZS1pcGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycycpLFxuICAgIExvZ0NvbG9ycyA9IHJlcXVpcmUoJy4vZW50aXRpZXMvTG9nQ29sb3JzLmpzJyksXG4gICAgSVBDID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9JUEMuanMnKTtcblxuY2xhc3MgSVBDTW9kdWxlIGV4dGVuZHMgSVBDe1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8vaW5jbHVkZSBJUEMgdG8gbWFrZSBleHRlbnNpYmxlXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAnSVBDJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOnRydWUsXG4gICAgICAgICAgICAgICAgd3JpdGFibGU6ZmFsc2UsXG4gICAgICAgICAgICAgICAgdmFsdWU6SVBDXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG59XG5cblxuY29sb3JzLnNldFRoZW1lKG5ldyBMb2dDb2xvcnMpO1xuXG5tb2R1bGUuZXhwb3J0cz1uZXcgSVBDTW9kdWxlO1xuIl19