'use strict';

var addSorting = function () {
    "use strict";

    var cols,
        currentSort = {
        index: 0,
        desc: false
    };

    // returns the summary table element
    function getTable() {
        return document.querySelector('.coverage-summary');
    }
    // returns the thead element of the summary table
    function getTableHeader() {
        return getTable().querySelector('thead tr');
    }
    // returns the tbody element of the summary table
    function getTableBody() {
        return getTable().querySelector('tbody');
    }
    // returns the th element for nth column
    function getNthColumn(n) {
        return getTableHeader().querySelectorAll('th')[n];
    }

    // loads all columns
    function loadColumns() {
        var colNodes = getTableHeader().querySelectorAll('th'),
            colNode,
            cols = [],
            col,
            i;

        for (i = 0; i < colNodes.length; i += 1) {
            colNode = colNodes[i];
            col = {
                key: colNode.getAttribute('data-col'),
                sortable: !colNode.getAttribute('data-nosort'),
                type: colNode.getAttribute('data-type') || 'string'
            };
            cols.push(col);
            if (col.sortable) {
                col.defaultDescSort = col.type === 'number';
                colNode.innerHTML = colNode.innerHTML + '<span class="sorter"></span>';
            }
        }
        return cols;
    }
    // attaches a data attribute to every tr element with an object
    // of data values keyed by column name
    function loadRowData(tableRow) {
        var tableCols = tableRow.querySelectorAll('td'),
            colNode,
            col,
            data = {},
            i,
            val;
        for (i = 0; i < tableCols.length; i += 1) {
            colNode = tableCols[i];
            col = cols[i];
            val = colNode.getAttribute('data-value');
            if (col.type === 'number') {
                val = Number(val);
            }
            data[col.key] = val;
        }
        return data;
    }
    // loads all row data
    function loadData() {
        var rows = getTableBody().querySelectorAll('tr'),
            i;

        for (i = 0; i < rows.length; i += 1) {
            rows[i].data = loadRowData(rows[i]);
        }
    }
    // sorts the table using the data for the ith column
    function sortByIndex(index, desc) {
        var key = cols[index].key,
            sorter = function sorter(a, b) {
            a = a.data[key];
            b = b.data[key];
            return a < b ? -1 : a > b ? 1 : 0;
        },
            finalSorter = sorter,
            tableBody = document.querySelector('.coverage-summary tbody'),
            rowNodes = tableBody.querySelectorAll('tr'),
            rows = [],
            i;

        if (desc) {
            finalSorter = function finalSorter(a, b) {
                return -1 * sorter(a, b);
            };
        }

        for (i = 0; i < rowNodes.length; i += 1) {
            rows.push(rowNodes[i]);
            tableBody.removeChild(rowNodes[i]);
        }

        rows.sort(finalSorter);

        for (i = 0; i < rows.length; i += 1) {
            tableBody.appendChild(rows[i]);
        }
    }
    // removes sort indicators for current column being sorted
    function removeSortIndicators() {
        var col = getNthColumn(currentSort.index),
            cls = col.className;

        cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '');
        col.className = cls;
    }
    // adds sort indicators for current column being sorted
    function addSortIndicators() {
        getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted';
    }
    // adds event listeners for all sorter widgets
    function enableUI() {
        var i,
            el,
            ithSorter = function ithSorter(i) {
            var col = cols[i];

            return function () {
                var desc = col.defaultDescSort;

                if (currentSort.index === i) {
                    desc = !currentSort.desc;
                }
                sortByIndex(i, desc);
                removeSortIndicators();
                currentSort.index = i;
                currentSort.desc = desc;
                addSortIndicators();
            };
        };
        for (i = 0; i < cols.length; i += 1) {
            if (cols[i].sortable) {
                // add the click event handler on the th so users
                // dont have to click on those tiny arrows
                el = getNthColumn(i).querySelector('.sorter').parentElement;
                if (el.addEventListener) {
                    el.addEventListener('click', ithSorter(i));
                } else {
                    el.attachEvent('onclick', ithSorter(i));
                }
            }
        }
    }
    // adds sorting functionality to the UI
    return function () {
        if (!getTable()) {
            return;
        }
        cols = loadColumns();
        loadData(cols);
        addSortIndicators();
        enableUI();
    };
}();

window.addEventListener('load', addSorting);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGUtaXBjL3NwZWMvY292ZXJhZ2UvbGNvdi1yZXBvcnQvc29ydGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxhQUFhLFlBQWE7QUFDMUIsaUJBRDBCOztBQUUxQixRQUFJLElBQUo7UUFDSSxjQUFjO0FBQ1YsZUFBTyxDQUFQO0FBQ0EsY0FBTSxLQUFOO0tBRko7OztBQUhzQixhQVNqQixRQUFULEdBQW9CO0FBQUUsZUFBTyxTQUFTLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVAsQ0FBRjtLQUFwQjs7QUFUMEIsYUFXakIsY0FBVCxHQUEwQjtBQUFFLGVBQU8sV0FBVyxhQUFYLENBQXlCLFVBQXpCLENBQVAsQ0FBRjtLQUExQjs7QUFYMEIsYUFhakIsWUFBVCxHQUF3QjtBQUFFLGVBQU8sV0FBVyxhQUFYLENBQXlCLE9BQXpCLENBQVAsQ0FBRjtLQUF4Qjs7QUFiMEIsYUFlakIsWUFBVCxDQUFzQixDQUF0QixFQUF5QjtBQUFFLGVBQU8saUJBQWlCLGdCQUFqQixDQUFrQyxJQUFsQyxFQUF3QyxDQUF4QyxDQUFQLENBQUY7S0FBekI7OztBQWYwQixhQWtCakIsV0FBVCxHQUF1QjtBQUNuQixZQUFJLFdBQVcsaUJBQWlCLGdCQUFqQixDQUFrQyxJQUFsQyxDQUFYO1lBQ0EsT0FESjtZQUVJLE9BQU8sRUFBUDtZQUNBLEdBSEo7WUFJSSxDQUpKLENBRG1COztBQU9uQixhQUFLLElBQUksQ0FBSixFQUFPLElBQUksU0FBUyxNQUFULEVBQWlCLEtBQUssQ0FBTCxFQUFRO0FBQ3JDLHNCQUFVLFNBQVMsQ0FBVCxDQUFWLENBRHFDO0FBRXJDLGtCQUFNO0FBQ0YscUJBQUssUUFBUSxZQUFSLENBQXFCLFVBQXJCLENBQUw7QUFDQSwwQkFBVSxDQUFDLFFBQVEsWUFBUixDQUFxQixhQUFyQixDQUFEO0FBQ1Ysc0JBQU0sUUFBUSxZQUFSLENBQXFCLFdBQXJCLEtBQXFDLFFBQXJDO2FBSFYsQ0FGcUM7QUFPckMsaUJB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QixPQUFwQixFQUE2QixVQUFVLENBQVYsQ0FBN0IsRUFEcUI7aUJBQXpCLE1BRU87QUFDSCx1QkFBRyxXQUFILENBQWUsU0FBZixFQUEwQixVQUFVLENBQVYsQ0FBMUIsRUFERztpQkFGUDthQUpKO1NBREo7S0FuQko7O0FBakgwQixXQWtKbkIsWUFBWTtBQUNmLFlBQUksQ0FBQyxVQUFELEVBQWE7QUFDYixtQkFEYTtTQUFqQjtBQUdBLGVBQU8sYUFBUCxDQUplO0FBS2YsaUJBQVMsSUFBVCxFQUxlO0FBTWYsNEJBTmU7QUFPZixtQkFQZTtLQUFaLENBbEptQjtDQUFaLEVBQWQ7O0FBNkpKLE9BQU8sZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsVUFBaEMiLCJmaWxlIjoic29ydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFkZFNvcnRpbmcgPSAoZnVuY3Rpb24gKCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIHZhciBjb2xzLFxuICAgICAgICBjdXJyZW50U29ydCA9IHtcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgZGVzYzogZmFsc2VcbiAgICAgICAgfTtcblxuICAgIC8vIHJldHVybnMgdGhlIHN1bW1hcnkgdGFibGUgZWxlbWVudFxuICAgIGZ1bmN0aW9uIGdldFRhYmxlKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdmVyYWdlLXN1bW1hcnknKTsgfVxuICAgIC8vIHJldHVybnMgdGhlIHRoZWFkIGVsZW1lbnQgb2YgdGhlIHN1bW1hcnkgdGFibGVcbiAgICBmdW5jdGlvbiBnZXRUYWJsZUhlYWRlcigpIHsgcmV0dXJuIGdldFRhYmxlKCkucXVlcnlTZWxlY3RvcigndGhlYWQgdHInKTsgfVxuICAgIC8vIHJldHVybnMgdGhlIHRib2R5IGVsZW1lbnQgb2YgdGhlIHN1bW1hcnkgdGFibGVcbiAgICBmdW5jdGlvbiBnZXRUYWJsZUJvZHkoKSB7IHJldHVybiBnZXRUYWJsZSgpLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5Jyk7IH1cbiAgICAvLyByZXR1cm5zIHRoZSB0aCBlbGVtZW50IGZvciBudGggY29sdW1uXG4gICAgZnVuY3Rpb24gZ2V0TnRoQ29sdW1uKG4pIHsgcmV0dXJuIGdldFRhYmxlSGVhZGVyKCkucXVlcnlTZWxlY3RvckFsbCgndGgnKVtuXTsgfVxuXG4gICAgLy8gbG9hZHMgYWxsIGNvbHVtbnNcbiAgICBmdW5jdGlvbiBsb2FkQ29sdW1ucygpIHtcbiAgICAgICAgdmFyIGNvbE5vZGVzID0gZ2V0VGFibGVIZWFkZXIoKS5xdWVyeVNlbGVjdG9yQWxsKCd0aCcpLFxuICAgICAgICAgICAgY29sTm9kZSxcbiAgICAgICAgICAgIGNvbHMgPSBbXSxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbE5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb2xOb2RlID0gY29sTm9kZXNbaV07XG4gICAgICAgICAgICBjb2wgPSB7XG4gICAgICAgICAgICAgICAga2V5OiBjb2xOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2wnKSxcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogIWNvbE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLW5vc29ydCcpLFxuICAgICAgICAgICAgICAgIHR5cGU6IGNvbE5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLXR5cGUnKSB8fCAnc3RyaW5nJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbHMucHVzaChjb2wpO1xuICAgICAgICAgICAgaWYgKGNvbC5zb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbC5kZWZhdWx0RGVzY1NvcnQgPSBjb2wudHlwZSA9PT0gJ251bWJlcic7XG4gICAgICAgICAgICAgICAgY29sTm9kZS5pbm5lckhUTUwgPSBjb2xOb2RlLmlubmVySFRNTCArICc8c3BhbiBjbGFzcz1cInNvcnRlclwiPjwvc3Bhbj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2xzO1xuICAgIH1cbiAgICAvLyBhdHRhY2hlcyBhIGRhdGEgYXR0cmlidXRlIHRvIGV2ZXJ5IHRyIGVsZW1lbnQgd2l0aCBhbiBvYmplY3RcbiAgICAvLyBvZiBkYXRhIHZhbHVlcyBrZXllZCBieSBjb2x1bW4gbmFtZVxuICAgIGZ1bmN0aW9uIGxvYWRSb3dEYXRhKHRhYmxlUm93KSB7XG4gICAgICAgIHZhciB0YWJsZUNvbHMgPSB0YWJsZVJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpLFxuICAgICAgICAgICAgY29sTm9kZSxcbiAgICAgICAgICAgIGNvbCxcbiAgICAgICAgICAgIGRhdGEgPSB7fSxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICB2YWw7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB0YWJsZUNvbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbE5vZGUgPSB0YWJsZUNvbHNbaV07XG4gICAgICAgICAgICBjb2wgPSBjb2xzW2ldO1xuICAgICAgICAgICAgdmFsID0gY29sTm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcbiAgICAgICAgICAgIGlmIChjb2wudHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRhdGFbY29sLmtleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIC8vIGxvYWRzIGFsbCByb3cgZGF0YVxuICAgIGZ1bmN0aW9uIGxvYWREYXRhKCkge1xuICAgICAgICB2YXIgcm93cyA9IGdldFRhYmxlQm9keSgpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RyJyksXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICByb3dzW2ldLmRhdGEgPSBsb2FkUm93RGF0YShyb3dzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBzb3J0cyB0aGUgdGFibGUgdXNpbmcgdGhlIGRhdGEgZm9yIHRoZSBpdGggY29sdW1uXG4gICAgZnVuY3Rpb24gc29ydEJ5SW5kZXgoaW5kZXgsIGRlc2MpIHtcbiAgICAgICAgdmFyIGtleSA9IGNvbHNbaW5kZXhdLmtleSxcbiAgICAgICAgICAgIHNvcnRlciA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICAgICAgYSA9IGEuZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGIgPSBiLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYSA8IGIgPyAtMSA6IGEgPiBiID8gMSA6IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmluYWxTb3J0ZXIgPSBzb3J0ZXIsXG4gICAgICAgICAgICB0YWJsZUJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY292ZXJhZ2Utc3VtbWFyeSB0Ym9keScpLFxuICAgICAgICAgICAgcm93Tm9kZXMgPSB0YWJsZUJvZHkucXVlcnlTZWxlY3RvckFsbCgndHInKSxcbiAgICAgICAgICAgIHJvd3MgPSBbXSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgaWYgKGRlc2MpIHtcbiAgICAgICAgICAgIGZpbmFsU29ydGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTEgKiBzb3J0ZXIoYSwgYik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd05vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICByb3dzLnB1c2gocm93Tm9kZXNbaV0pO1xuICAgICAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHJvd05vZGVzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJvd3Muc29ydChmaW5hbFNvcnRlcik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChyb3dzW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyByZW1vdmVzIHNvcnQgaW5kaWNhdG9ycyBmb3IgY3VycmVudCBjb2x1bW4gYmVpbmcgc29ydGVkXG4gICAgZnVuY3Rpb24gcmVtb3ZlU29ydEluZGljYXRvcnMoKSB7XG4gICAgICAgIHZhciBjb2wgPSBnZXROdGhDb2x1bW4oY3VycmVudFNvcnQuaW5kZXgpLFxuICAgICAgICAgICAgY2xzID0gY29sLmNsYXNzTmFtZTtcblxuICAgICAgICBjbHMgPSBjbHMucmVwbGFjZSgvIHNvcnRlZCQvLCAnJykucmVwbGFjZSgvIHNvcnRlZC1kZXNjJC8sICcnKTtcbiAgICAgICAgY29sLmNsYXNzTmFtZSA9IGNscztcbiAgICB9XG4gICAgLy8gYWRkcyBzb3J0IGluZGljYXRvcnMgZm9yIGN1cnJlbnQgY29sdW1uIGJlaW5nIHNvcnRlZFxuICAgIGZ1bmN0aW9uIGFkZFNvcnRJbmRpY2F0b3JzKCkge1xuICAgICAgICBnZXROdGhDb2x1bW4oY3VycmVudFNvcnQuaW5kZXgpLmNsYXNzTmFtZSArPSBjdXJyZW50U29ydC5kZXNjID8gJyBzb3J0ZWQtZGVzYycgOiAnIHNvcnRlZCc7XG4gICAgfVxuICAgIC8vIGFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgc29ydGVyIHdpZGdldHNcbiAgICBmdW5jdGlvbiBlbmFibGVVSSgpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBlbCxcbiAgICAgICAgICAgIGl0aFNvcnRlciA9IGZ1bmN0aW9uIGl0aFNvcnRlcihpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbCA9IGNvbHNbaV07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IGNvbC5kZWZhdWx0RGVzY1NvcnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTb3J0LmluZGV4ID09PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjID0gIWN1cnJlbnRTb3J0LmRlc2M7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc29ydEJ5SW5kZXgoaSwgZGVzYyk7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVNvcnRJbmRpY2F0b3JzKCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTb3J0LmluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFNvcnQuZGVzYyA9IGRlc2M7XG4gICAgICAgICAgICAgICAgICAgIGFkZFNvcnRJbmRpY2F0b3JzKCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIGZvciAoaSA9MCA7IGkgPCBjb2xzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAoY29sc1tpXS5zb3J0YWJsZSkge1xuICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgY2xpY2sgZXZlbnQgaGFuZGxlciBvbiB0aGUgdGggc28gdXNlcnNcbiAgICAgICAgICAgICAgICAvLyBkb250IGhhdmUgdG8gY2xpY2sgb24gdGhvc2UgdGlueSBhcnJvd3NcbiAgICAgICAgICAgICAgICBlbCA9IGdldE50aENvbHVtbihpKS5xdWVyeVNlbGVjdG9yKCcuc29ydGVyJykucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGl0aFNvcnRlcihpKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uY2xpY2snLCBpdGhTb3J0ZXIoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGRzIHNvcnRpbmcgZnVuY3Rpb25hbGl0eSB0byB0aGUgVUlcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWdldFRhYmxlKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb2xzID0gbG9hZENvbHVtbnMoKTtcbiAgICAgICAgbG9hZERhdGEoY29scyk7XG4gICAgICAgIGFkZFNvcnRJbmRpY2F0b3JzKCk7XG4gICAgICAgIGVuYWJsZVVJKCk7XG4gICAgfTtcbn0pKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYWRkU29ydGluZyk7XG4iXX0=