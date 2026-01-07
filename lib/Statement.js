"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statement = void 0;
const Promise = require("bluebird");
const ResultSet_1 = require("./ResultSet");
class Statement {
    constructor(statement) {
        this.statement = Promise.promisifyAll(statement, {
            filter: (name, _, __, passesDefaultFilter) => {
                return passesDefaultFilter && !name.endsWith('Async');
            }
        });
    }
    executeUpdate(sql) {
        return this.statement.executeUpdateAsync(sql);
    }
    executeUpdateSync(sql) {
        return this.statement.executeUpdate(sql);
    }
    executeQuery(sql) {
        return this.statement.executeQueryAsync(sql)
            .then((resultSet) => new ResultSet_1.ResultSet(resultSet));
    }
    addBatch(sql) {
        return this.statement.addBatchAsync(sql);
    }
    addBatchSync(sql) {
        return this.statement.addBatchSync(sql);
    }
    clearBatchSync() {
        return this.statement.clearBatchSync();
    }
    clearBatch() {
        return this.statement.clearBatchAsync();
    }
    executeBatch() {
        return this.statement.executeBatchAsync();
    }
    executeBatchSync() {
        return this.statement.executeBatchSync();
    }
    setQueryTimeout(seconds) {
        return this.statement.setQueryTimeoutSync(seconds);
    }
    close() {
        return this.statement.closeAsync();
    }
}
exports.Statement = Statement;
//# sourceMappingURL=Statement.js.map